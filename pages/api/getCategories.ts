import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from "../../sanity"


const query = groq`*[_type == "category"]{
    _id, slug, _type, title, image
    }`

    type Data = {
        categories: Category[]
      }
      
const handler = async (
        req: NextApiRequest,
        res: NextApiResponse<Data>
      ) => {
        const categories = await sanityClient.fetch(query)
        res.status(200).json({categories})
      }
export default handler

//funkcja zwracająca kategorie na bazie groq query z sanity.