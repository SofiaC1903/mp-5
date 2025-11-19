"use client";
import { useState, useEffect } from "react";
import createNewLink from "@/app/lib/createNewLink";
import {LinkProps} from "@/LinkProps";
import styled from "styled-components";
import Link from "next/link";

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    height: 65vh;
`

const StyledHelperText = styled.h2`
    color: var(--color-alabastergrey);
    text-shadow: 1px 2px 8px #78678E;
    font-size: calc(5px + 2vw);
    padding-bottom: 50px;
    font-family: "Titan One", sans-serif;
`

const TextField = styled.input`
    border-radius: 20px;
    background-color: #ADB7C1;
    margin: 20px;
    width:70%;
`
const StyledLink = styled.p`
    color: var(--color-alabastergrey);
    text-shadow: 1px 2px 8px #78678E;
    font-size: calc(2px + 1.5vw);
    margin: 20px;
    font-family: "Titan One", sans-serif;
`

const StyledButton = styled.button`
    margin: 20px;
    background-color: #3BA584;
    font-family: "Titan One", sans-serif;
    height: 10%;
    width: 30%;
`

const StyledDiv = styled.div`
    font-family: "Titan One", sans-serif;
    font-size: calc(2px + 2vw);
    justify-content: center;
    color: var(--color-alabastergrey);
    text-shadow: 1px 2px 8px #78678E;
    padding-bottom: 5%;
`

export default function NewLinkForm() {
    const [longurl, setLongurl] = useState("");
    const [alias, setAlias] = useState("");
    const [error, setError] = useState("");
    const [shorturl, setShortURL] = useState("");
    const [loading, setLoading] = useState(false);
    const [domain, setDomain] = useState("");
    const [copied, setCopied] = useState(false);


    async function submitURL(){
        setLoading(true);
        setError("");
        setCopied(false);

        try{
            const Res =  await createNewLink(longurl, alias);
            if(Res.length > 0){
                setError(Res);
            }else{
                setShortURL(`${domain}/${alias}`);
            }
        }catch(err){
            console.error(err);
            setError("An error occurred while creating link. Please try again later.");
        }finally {
            setLoading(false);
        }
    }

    const copyToClipboard = () => {
        if(shorturl){
            navigator.clipboard.writeText(shorturl);
            setCopied(true);
        }
    };

    useEffect(() =>{
        setDomain(window.location.origin);
    }, []);


    return(
        <div>
            <StyledForm
                    onSubmit={async (event) => {
                    event.preventDefault();
                    submitURL();
                }}
            >
                <StyledHelperText>Enter an unreasonably long URL, so we can make life easier for you :)</StyledHelperText>
                <div>
                    <StyledLink>Enter a long URL here</StyledLink>
                    <TextField
                        placeholder="https://example.com/painfuly/long/url/like/unbelievably/so"
                        name="url"
                        required
                        disabled={loading}
                        value={longurl}
                        onChange={(e)=>setLongurl(e.target.value)}
                    />
                </div>
                <div>
                    <StyledLink>https://cs391-mp-5-sf.vercel.app/</StyledLink>
                    <StyledLink>Enter an Alias</StyledLink>
                    <TextField
                        placeholder="Your cute and custom alias"
                        name="alias"
                        required
                        disabled={loading}
                        value={alias}
                        onChange={(e)=>setAlias(e.target.value)}
                    />
                </div>
                <StyledButton
                    type="submit"
                    disabled={loading}
                >
                    {loading ? "Generating ..." : "Generate shortcut"}
                </StyledButton>
                {error && (
                    <StyledLink>
                        {error}
                    </StyledLink>
                )}

            </StyledForm>

            {shorturl && (
                <StyledDiv>
                    <h4>Final URL:</h4>
                    <a
                        href={shorturl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {shorturl}
                    </a>
                    <StyledButton onClick={copyToClipboard}>
                        {copied ? "Success! YAY!" : "Copy"}
                    </StyledButton>
                </StyledDiv>
            )}
        </div>
    )
}