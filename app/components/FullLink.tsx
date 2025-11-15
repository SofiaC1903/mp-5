import {redirect} from "next/navigation";
import {LinkProps} from "@/LinkProps";


export default function FullLink({link}:{link: LinkProps}){
    const new_link = link.longurl;

    return redirect("/" + new_link);
}