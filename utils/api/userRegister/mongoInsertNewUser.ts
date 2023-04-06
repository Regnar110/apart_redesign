import { Db } from "mongodb";
import { NextApiResponse } from "next/types";

interface Props {
    (
        db:Db,
        register_email: string,
        hashed_password: string,
        register_name: string,
        register_surname: string,
        wishList_productsRef: [],
        res:NextApiResponse<RegisterResponse>
    ): Promise<void>

}
export const mongoInsertNewUser:Props = async (db, register_email, hashed_password, register_name, register_surname, wishList_productsRef, res) => {
    try {
        const user = await db.collection("user").insertOne({
            user_email: register_email,
            password: hashed_password,
            name: register_name,
            surname: register_surname,
            wishList_productsRef,
        })
        if(user.insertedId && user.acknowledged){
            res.status(200).json({
              is_error:false,
              is_userExist: false,
              name: register_name,
              surname: register_surname,
              response_message:"Dziękujemy za rejestrację w naszym serwisie. Może zalogować się za pomocą e-mail i hasła."
            })
          } else {
            throw new Error()
          }
    } catch (error) {
        res.status(500).json({
            is_error: true,
            is_userExist:false,
            error_message:"Status 500: userRegister mongoInsertNewUser ROUTE UTILITY CATCH BLOCK ERROR",
            response_message: "Coś poszło nie tak. Nie można zarejestrować użytkownika. Skontaktuj się z centrum pomocy aby uzyskać pomoc"
          })
    }
}