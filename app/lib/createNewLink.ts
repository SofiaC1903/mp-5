"use server";
import getCollection, {LINKS_COLLECTION} from "@/db";
import {LinkProps} from "@/LinkProps";


export default async function createNewLink(url: string, alias: string): Promise<LinkProps>{
    console.log("Creating new link...");
    const postCollection = await getCollection(LINKS_COLLECTION);


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