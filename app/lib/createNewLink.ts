"use server";
import getCollection, {LINKS_COLLECTION} from "@/db";
import getLinkByURL from "@/app/lib/getLinkByURL";
import {LinkProps} from "@/LinkProps";


export default async function createNewLink(url: string, alias: string): Promise<string>{
    console.log("Creating new url...");
    if (!url || !alias){
        throw Error("Url or alias is missing. Please ensure both have been introduced");
    }else if(
        url.startsWith("https://cs-https://cs391-mp-5-sf.vercel.app/") ||
        url.startsWith("http://localhost:3000/")
    ){
        throw Error("Invalid URL: It will result in cycles.")
    }else if(encodeURIComponent(alias) != alias){
        throw Error("Invalid alias, please enter a different one");
    }

    try{
        const res = await fetch(url);
        if (res.status < 200 || res.status >= 500){
            console.log("Url responded in an invalid way: ", res.status);
            return "Invalid URL: bad status code" + res.status;
        }
    } catch {
        console.log("Failed to fetch URL");
        return "Invalid URL: Failed to fetch URL. Try again or introduce new URL"
    }




    const alias_exists = await getLinkByURL(alias);

    if (alias_exists) {
        throw Error("Alias already exists. Pick a different one.");
    }

    const postCollection = await getCollection(LINKS_COLLECTION);

    const link = {
        longurl: url,
        alias: alias,
    }

    const res = await postCollection.insertOne({link});

    if(!res.acknowledged){
        throw Error("Failed to insert url into DB.");
    }

    return ""

}