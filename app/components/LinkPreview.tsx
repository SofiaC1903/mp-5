import { LinkProps } from "@/LinkProps";
import Link from "next/link";

export default function LinkPreview({ link }: {link: LinkProps}){
    return (
        <div className="bg-yellow-100 rounded-4xl">
            <h4>Final URL:</h4>
            <Link href={link.longurl}>
                <p>{link.shorturl}</p>
            </Link>
        </div>
    )
}