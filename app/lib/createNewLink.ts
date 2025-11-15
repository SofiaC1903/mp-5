"use server";
import getCollection, {LINKS_COLLECTION} from "@/db";
import {LinkProps} from "@/LinkProps";


export default async function createNewLink(url: string, alias: string): Promise<LinkProps>{
    console.log("Creating new url...");

    const postCollection = await getCollection(LINKS_COLLECTION);

    if (encodeURIComponent(url) != url) {
        throw Error("Invalid URL. Check for errors or enter another URL.");
    }

    if (encodeURIComponent(alias) != alias){
        throw Error("Invalid alias, please enter a different one");
    }

    const alias_exists = postCollection.findOne({alias: alias});

    if (alias_exists === null ) {
        throw Error("Alias already exists. Pick a different one.");
    }

    const shortendURL = "https://cs391-mp-5-sf.vercel.app/" + alias;

    const link = {
        longurl: url,
        alias: alias,
        shorturl: shortendURL,
    }

    const res = await postCollection.insertOne({...link});

    if(!res.acknowledged){
        throw Error("Failed to insert url into DB");
    }

    return {...link, id: res.insertedId.toHexString()};

}