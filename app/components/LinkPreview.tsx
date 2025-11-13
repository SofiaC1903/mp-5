import { LinkProps } from "@/LinkProps";

export default function LinkPreview({ link }: {link: LinkProps}){
    return (
        <div className="bg-yellow-100 rounded-4xl">
            <h4>Final URL:</h4>
            <p>{link.shorturl}</p>
        </div>
    )
}