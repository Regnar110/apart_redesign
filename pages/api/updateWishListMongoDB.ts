import { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from '../../utils/connectMongo'

const handler = async (
    req: NextApiRequest,
    res: NextApiResponse
  ) => {
    const client = await clientPromise
    const db = client.db("registered_users")
    const {payload} = req.body
    const userDocument = await db.collection("user").findOne({user_email:payload.user_email})
    if(payload && payload.action === "ADD") {
        const result = await db.collection("user").updateOne({user_email:payload.user_email}, {
            $set: {
                wishList_productsRef: [...userDocument.wishList_productsRef, payload.product_id]
            }
        })
      res.status(200).json(result)          
    } else {
        const indexOfProductToRemove:number = userDocument.wishList_productsRef.findIndex((el:string) => el === payload.product_id)
        const newArr = userDocument.wishList_productsRef.splice(indexOfProductToRemove,1)
        if(indexOfProductToRemove === -1) { // jeżeli produkt nie istnieje tzn index = -1 to nic nie robimy. Jeżeli jest 0 lub więcej to usuwamy z tablicy wskazany index
            return;
        } else {
            const result = await db.collection("user").updateOne({user_email:payload.user_email}, {
                $set: {
                    wishList_productsRef: userDocument.wishList_productsRef.splice(indexOfProductToRemove, 1)
                }
            })
            console.log(result)
            res.status(200).json(newArr)
        }
    }

    
  }
export default handler