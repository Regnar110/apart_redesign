import type { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from '../../../utils/connectMongo'
import bcrypt from 'bcrypt'
      
const handler = async (
  // https://itnext.io/using-mongoose-with-next-js-11-b2a08ff2dd3c
        req: NextApiRequest,
        res: NextApiResponse<LoginResponse>
      ) => {
        const {login_email, login_password} = req.body
        try {
          const client = await clientPromise;
          const db = client.db("registered_users");
          const userDocument = await db.collection("user").findOne({user_email:login_email})
          
          if(userDocument) {
            const isPasswordMatch = await bcrypt.compare(login_password, userDocument!.password)
            if(isPasswordMatch) {
              res.status(200).json({...userDocument}) //błąd wynikający jedynie z różnic w typowaniu. Nie naprawiać
            } else {
              res.status(200).json({
                is_error:true,
                is_userExist:false,
                error_message:"Wprowadziłeś błędne hasło",
              })
            }
          } else {
            res.status(200).json({
              is_error:true,
              is_userExist:false,
              error_message:"Użytkownik o podanym zestawie danych nie ustnieje. Sprawdź wprowadzone dane.",
            })
          }
        } catch (error) {
          res.status(500).json({
            is_error:true,
            is_userExist:false,
            error_message:"Status 500: userLOGIN ROUTE CATCH BLOCK ERROR",
          })
        }
      }
export default handler

// Funkcja obsługująca akcję logowania się użytkownika na stronę. Ma ona wbudowaną obsługę błędów dla kilku przypadków. Dzięki temu użytkownik jest wstanie otrzymać
// wiadomość zwrotną z informacją o wykonaniu żądania oraz o np. błędzie w wykonaniu żądania.