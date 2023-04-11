import { Db } from "mongodb";

export const isEmailExist = async (email:string, db:Db) => {
    const document = await db.collection("user").findOne({user_email:email})
    return document ? true : false
}

// funkcja sprawdzjąca czy email istnieje w kolekcji user 