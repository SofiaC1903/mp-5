"use client";
import { Button, FormHelperText, TextField } from "@mui/material";
import { useState } from "react";
import createNewLink from "@/app/lib/createNewLink";
import {LinkProps} from "@/LinkProps";
import styled from "styled-components";

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    height: 65vh;
`

const StyledHelperText = styled(FormHelperText)`
    color: var(--color-alabastergrey);
    text-shadow: 1px 2px 8px #78678E;
    font-size: calc(5px + 2vw);
    padding-bottom: 50px;
    font-family: "Titan One", sans-serif;
`

const StyledLink = styled.p`
    color: var(--color-alabastergrey);
    text-shadow: 1px 2px 8px #78678E;
    font-size: calc(2px + 1.5vw);
    margin: 20px;
    font-family: "Titan One", sans-serif;
`

export default function NewLinkForm({displayAction,}:{displayAction: (link:LinkProps)=>void; }) {
    const [longurl, setLongurl] = useState("");
    const [alias, setAlias] = useState("");

    return (
        <StyledForm
                onSubmit={async (event) => {
                event.preventDefault();
                createNewLink(longurl, alias)
                    .then((newLink)=> displayAction(newLink))
                    .catch((error)=> console.error(error));
            }}
        >
            <StyledHelperText>Enter an unreasonably long URL, so we can make life easier for you :)</StyledHelperText>
            <TextField
                variant="outlined"
                sx={{
                    borderRadius: "5px",
                    backgroundColor: "#ADB7C1",
                    margin: "20px",
                    width:"70%"
                }}
                label={"Enter a long URL here"}
                value={longurl}
                onChange={(e)=>setLongurl(e.target.value)}
            />
            <div>
                <StyledLink>https://cs391-mp-5-sf.vercel.app/</StyledLink>
                <TextField
                    variant="outlined"
                    sx={{
                        borderRadius: "5px",
                        backgroundColor: "#ADB7C1",
                        margin: "20px",
                        width:"70%"
                    }}
                    label={"Enter an Alias"}
                    value={alias}
                    onChange={(e)=>setAlias(e.target.value)}
                />
            </div>
            <Button
                sx={{
                    margin: "20px",
                    backgroundColor: "#3BA584",
                    fontFamily: "Titan One",
                    height: "10%",
                    width:"30%",
                }}
                variant="contained"
                type="submit"
                disabled={longurl==="" || alias===""}
            >
                Generate Shortcut
            </Button>

        </StyledForm>
    )
}