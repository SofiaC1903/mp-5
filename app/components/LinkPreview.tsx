import { LinkProps } from "@/LinkProps";
import Link from "next/link";

export default function LinkPreview({ link }: {link: LinkProps}){
    return (
        <Link href={link.longurl}>
            <div className="bg-yellow-100 rounded-4xl">
                <h4>Final URL:</h4>
                <p>{link.shorturl}</p>
            </div>
        </Link>
    )
}