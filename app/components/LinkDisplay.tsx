"use client"
import { LinkProps } from "@/LinkProps"
import { useState } from "react";
import NewLinkForm from "@/app/components/NewLinkForm";
import LinkPreview from "@/app/components/LinkPreview";

export default function LinkDisplay({inputLinks,}: {inputLinks: LinkProps}){
    const [link, setLink] = useState(inputLinks);

    return (
        <div className="flex flex-col items-center">
            <NewLinkForm displayAction={(newLink: LinkProps)=>{
                setLink(newLink);
            }}/>
            <LinkPreview key={link.id} link={link}/>
        </div>
    )
}
