import type { NextApiRequest, NextApiResponse } from 'next'
import mongoose from 'mongoose'
import { ObjectId } from 'mongodb';
    type LoginReqBody = {
        login_email:string;
        login_password: string;
      }

      
const handler = async (
  // https://itnext.io/using-mongoose-with-next-js-11-b2a08ff2dd3c
        req: NextApiRequest,
        res: NextApiResponse<SuccesLoginResponse>
      ) => {
        await mongoose.connect(`${process.env.ATLAS_URI}`)
        const userSchema = new mongoose.Schema({
          _id: ObjectId,
          user_email: String,
          password: String,
          user_name: String,
          user_surname:String,
          wishList_productsRef: Array,
          user_basket:Array
        })
        
        const body = req.body as LoginReqBody
        res.json({
            _id:"jakieśid",
            user_email:body.login_email,
            name:"Mateusz",
            surname:"Wrycza",
            wishList_productsRef: ["sdasdasd","dwadwadwa"],
            user_basket: ["asdasd","productid"]
        })
      }
export default handler