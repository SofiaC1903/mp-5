import getLinkByURL from "@/app/lib/getLinkByURL";
import {redirect} from "next/navigation";
import FullLink from "@/app/components/FullLink";

export default async function GetShortLink({params}:{params: Promise<{url: string }>}) {
    const {url} = await params;
    let link = null;

    try {
        link = await getLinkByURL(url);
    }catch (err){
        console.log(err);
        return redirect("/");
    }

    if (!link){
        redirect("/");
    }

    return <FullLink link={link}/>


}