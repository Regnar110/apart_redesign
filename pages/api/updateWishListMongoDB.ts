import { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from '../../utils/connectMongo'
import { WithId } from 'mongodb'


const handler = async (
    req: NextApiRequest,
    res: NextApiResponse
  ) => {
    try { // CAŁOŚĆ - ŁĄCZNOŚĆ Z MONGODB
        const client = await clientPromise
        const db = client.db("registered_users")
        const {payload} = req.body
        const userDocument= await db.collection<MongoUserDocument>("user").findOne({user_email:payload.user_email}) as MongoUserDocument
        if(payload && payload.action === "ADD") { //ADD
            const result = await db.collection("user").updateOne({user_email:payload.user_email}, {
                $set: {
                    wishList_productsRef: [...userDocument.wishList_productsRef, payload.product_id]
                }
            })
            result.modifiedCount > 0 ? res.status(200).json({isError:false, message:"Dodano produkt do listy życzeń."}) : res.status(500).json({isError:true, message:"Nie udało się dodac produktu do listy życzeń. Skontaktuj się z nami aby uzyskać pomoc."})      
        } else { //REMOVE
            console.log(userDocument.wishList_productsRef)
            const indexOfProduct = userDocument.wishList_productsRef.indexOf(payload.product_id)
            const indexOfProductToRemove:number = userDocument.wishList_productsRef.findIndex((el:string) => {
                return el === payload.product_id
            })
            if(indexOfProductToRemove === -1 && userDocument.wishList_productsRef.length > 1) { // jeżeli produkt nie istnieje tzn index = -1 to nic nie robimy. Jeżeli jest 0 lub więcej to usuwamy z tablicy wskazany index
                res.status(500).json({isError:true, message:"Nie znaleziono produktu w liście życzeń"})
                return;
            } else {
                const result = await db.collection("user").updateOne({user_email:payload.user_email}, {
                    $set: {
                        wishList_productsRef: userDocument.wishList_productsRef.filter((el) => el !== payload.product_id) 
                        // uzyto tutaj filter zamiast splice po to aby nie modyfikować metodą splice głównej tablicy. Zamiast tego filter zwraca nową tablicę co zapobiega błędom z wyszukiwaniem produktu do usunięcia.
                    }
                })
                console.log(result)
                result.modifiedCount > 0 ? res.status(200).json({isError:false, message:"Produkt usunięty z listy życzeń"}) : res.status(500).json({isError: true, message:"Nie udało usunąć się produktu z listy życzeń. Skontaktuj się z nami aby uzyskać pomoc"})
            }
        }        
    } catch (error) {
        res.status(500).json({isError:true, message:"ERROR STATUS 500: updateWishListMongoDB OVERALL ERROR!"})
    }


    
  }
export default handler