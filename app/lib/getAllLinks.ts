"use server"
import getCollection, {LINKS_COLLECTION} from "@/db";
import {LinkProps} from "@/LinkProps";

export default async function getAllLinks(): Promise<LinkProps[]> {
    const linkCollection = await getCollection(LINKS_COLLECTION);
    const data = await linkCollection.find().toArray();

    const links: LinkProps[] = data.map((l)=> ({
        id: l._id.toHexString(),
        longurl: l.longurl,
        alias: l.alias,
        shorturl: l.shorturl,
    }));

    return links.reverse();
}