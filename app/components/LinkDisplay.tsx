"use client"
import { useState } from "react";
import NewLinkForm from "@/app/components/NewLinkForm";
import LinkPreview from "@/app/components/LinkPreview";
import {LinkProps} from "@/LinkProps";

export default function LinkDisplay({inputLinks}: {inputLinks: LinkProps[];}){
    const [links, setLink] = useState(inputLinks);

    return (
        <div className="flex flex-col items-center">
            <NewLinkForm
                displayAction={(newLink: LinkProps)=>{
                    setLink([newLink]);
                }}/>
            {links.map((l: LinkProps)=>(
                <LinkPreview key={l.id} link={l}/>
            ))}
        </div>
    )
}
