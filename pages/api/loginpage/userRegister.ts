import type { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from '../../../utils/connectMongo'
      
const handler = async (
        req: NextApiRequest,
        res: NextApiResponse<SuccesRegisterResponse>
      ) => {
        const {register_email, register_password, register_name, register_surname} = req.body
        const client = await clientPromise;
        const db = client.db("registered_users")
        const user = await db.collection("user").insertOne({
          user_email: register_email,
          password: register_password,
          name: register_name,
          surname: register_surname,
          wishList_productsRef: [],
          user_basket: [],
        })
        res.json(req.body)
      }
export default handler