"use server";
import getCollection, {LINKS_COLLECTION} from "@/db";
import {LinkProps} from "@/LinkProps";


export default async function createNewLink(url: string, alias: string): Promise<LinkProps>{
    console.log("Creating new link...");
    const postCollection = await getCollection(LINKS_COLLECTION);

    if (encodeURIComponent(url) != url) {
        throw new Error("Invalid URL. Check for errors or enter another URL.");
    }

    if (encodeURIComponent(alias) != alias){
        throw new Error("Invalid alias, please enter a different one");
    }

    const alias_exists = postCollection.findOne({alias: alias});

    if (!alias_exists) {
        throw new Error("Alias already exists. Pick a different one.");
    }

    const shortendURL = "https://cs391-mp-5-sf.vercel.app/" + alias;

    const link = {
        longurl: url,
        alias: alias,
        shorturl: shortendURL,
    }

    const res = await postCollection.insertOne({...link});

    if(!res.acknowledged){
        throw new Error("Failed to insert link into DB");
    }

    return {...link, id: res.insertedId.toHexString()};

}