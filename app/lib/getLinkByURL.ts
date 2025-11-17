"use server";
import getCollection, {LINKS_COLLECTION} from "@/db";
import { ObjectId } from "mongodb";
import { LinkProps } from "@/LinkProps";

export default async function getLinkByURL(URL: string): Promise<LinkProps | null>{
    const linkCollection = await getCollection(LINKS_COLLECTION);

    let longURL;

    try{
        longURL = new ObjectId(URL);
    } catch {
        return null;
    }

    const data = await linkCollection.findOne({longurl: longURL});

    if (data === null){
        return null;
    }

    const link = {
        id: data.id,
        longurl: data.longurl,
        alias: data.alias,
        shorturl: data.shorturl,
    };

    return link;
}
