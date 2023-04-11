import type { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from '../../../utils/connectMongo'
import bcrypt from 'bcrypt'
import { isEmailExist } from '../../../utils/isEmailExist'
import { mongoInsertNewUser } from '../../../utils/api/userRegister/mongoInsertNewUser'
      
const handler = async (
        req: NextApiRequest,
        res: NextApiResponse<RegisterResponse>
      ) => {
        const {register_email, register_password, register_name, register_surname} = req.body as SuccesRegisterData
        
        try {        

          const client = await clientPromise;
          const db = client.db("registered_users")
          const userExist = await isEmailExist(register_email, db);
          
          switch(userExist) { // jeżeli użytkownik istnieje, lub nie
            case true: 
              res.status(200).json({
                is_error:false,
                is_userExist: true,
                name: register_name,
                surname: register_surname,
                response_message:"Ten email jest już w użyciu."
              })
              break
            case false:
              const hashed_password = await bcrypt.hash(register_password, 10)
              await mongoInsertNewUser(db, register_email, hashed_password, register_name, register_surname, [], res) // funckja, która dodaje nowego użyutkownika do naszej bazy
              break;
          }
        } catch (error) { // blok obsługujący błędy powstałe w wyniku npm subskrypcji clientPromise.
          res.status(500).json({
            is_error: true,
            error_message:"Status 500: userRegister ROUTE CATCH BLOCK ERROR",
            response_message: "Coś poszło nie tak. Skontaktuj się z nami żeby uzyskać pomoc."
          })
        }
      }
export default handler

// Funkcja obsługująca rejestrację nowego użytkownika do serwisu wraz z obsługą błędów, które mogą wystąpić w trakcie tego procesu.
// Użytkownik jest informowany o statusie realizacji jego akcji w postaci zwracanych obiektów.