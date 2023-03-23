import type { NextApiRequest, NextApiResponse } from 'next'
    type RegisterReqBody = {
        register_email:string;
        register_password: string;
        register_name:string;
        register_surname:string;
    }

      
const handler = async (
        req: NextApiRequest,
        res: NextApiResponse<SuccesRegisterResponse>
      ) => {
        const body = req.body as RegisterReqBody
        res.status(200).json({
            name:"Mateusz",
            surname:"Wrycza",
            hello_message:"Witaj w apart!"
        })
      }
export default handler