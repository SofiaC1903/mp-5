"use server";
import getCollection, {LINKS_COLLECTION} from "@/db";
import { ObjectId } from "mongodb";
import { LinkProps } from "@/LinkProps";

export default async function getLinkById(linkId: string): Promise<LinkProps | null>{
    const lId = ObjectId.createFromHexString(linkId);

    const linksCollection = await getCollection(LINKS_COLLECTION);
    const data = await linksCollection.findOne({id: lId});

    if (data === null){
        return null;
    }

    return (
        {
            id: linkId,
            longurl: data.longurl,
            alias: data.alias,
            shorturl: data.shorturl,
        }
    );


}
