"use client";
import { Button, FormHelperText, TextField } from "@mui/material";
import { useState } from "react";
import createNewLink from "@/app/lib/createNewLink";
import {LinkProps} from "@/LinkProps";

export default function NewLinkForm({displayAction}:{displayAction: (link:LinkProps)=>void; }) {
    const [longurl, setLongurl] = useState("");
    const [alias, setAlias] = useState("");

    return (
        <form
            className="bg-yellow-100"
            onSubmit={async (event) => {
                event.preventDefault();
                createNewLink(longurl, alias)
                    .then((newLink)=> displayAction(newLink))
                    .catch((error)=> console.error(error));
            }}
        >
            <FormHelperText>Enter an unreasonably long URL, so we can make life easier for you :)</FormHelperText>
            <TextField
                variant="outlined"
                sx={{width:"70%"}}
                label={"Enter a lonf URL here"}
                value={longurl}
                onChange={(e)=>setLongurl(e.target.value)}
            />
            <div>
                <p>https://cs391-mp-5-sf.vercel.app/</p>
                <TextField
                    variant="outlined"
                    sx={{width:"70%"}}
                    label={"Enter an Alias"}
                    value={alias}
                    onChange={(e)=>setAlias(e.target.value)}
                />
            </div>
            <div>
                <Button
                    sx={{width:"60%"}}
                    variant="contained"
                    type="submit"
                    disabled={longurl==="" || alias===""}
                >
                    Generate Shortcut
                </Button>
            </div>
        </form>
    )
}