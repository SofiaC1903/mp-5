"use server";
import getCollection, {LINKS_COLLECTION} from "@/db";


export default async function getLinkByURL(alias: string): Promise<string | null>{
    if (!alias){
        return null;
    }

    const linkCollection = await getCollection(LINKS_COLLECTION);

    const data = await linkCollection.findOne({alias: alias});

    if (!data){
        return null;
    }

    return data.longurl;
}
