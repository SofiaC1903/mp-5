import getLinkByURL from "@/app/lib/getLinkByURL";
import {redirect} from "next/navigation";

export default async function GetShortLink({params}:{params: Promise<{alias: string }>}) {
    const {alias} = await params;


    const link = await getLinkByURL(alias);

    if (link){
        console.log("Redirecting to: " + link);
        redirect(link);
    }

    redirect("/");

}