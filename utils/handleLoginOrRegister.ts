
export const handleLoginOrRegister = async <ReturnType>(targetAPI:string, data:SuccesRegisterData | SuccessLoginData)=> {
    const options = {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors" as RequestMode, // no-cors, *cors, same-origin
        credentials: "same-origin" as RequestCredentials, // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      }
    const responseData = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/loginpage/${targetAPI}`, options)
    const parsedData = await responseData.json();
    return parsedData as ReturnType
}

// Jest to funkcja, która obsługuje logowanie i rejestrację. Wysyła ona żądanie do api wskazanego przez użytkownika. może być to np userLogin lub userRegister. Następnie otrzymujemy
// odpowiedź.