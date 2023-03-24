import type { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from '../../../utils/connectMongo'

      
const handler = async (
  // https://itnext.io/using-mongoose-with-next-js-11-b2a08ff2dd3c
        req: NextApiRequest,
        res: NextApiResponse<SuccesLoginResponse>
      ) => {
        const client = await clientPromise;
        const db = client.db("registered_users")
        const user1 = await db.collection("user").findOne()
        const body = req.body as SuccessLoginData
        res.json(req.body)
        // res.json({
        //     _id:"jakieśid",
        //     user_email:body.login_email,
        //     name:"Mateusz",
        //     surname:"Wrycza",
        //     wishList_productsRef: ["sdasdasd","dwadwadwa"],
        //     user_basket: ["asdasd","productid"]
        // })
      }
export default handler