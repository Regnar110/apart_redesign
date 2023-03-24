
export const handleLoginOrRegister = async <ReturnType>(targetAPI:string, data:SuccesRegisterData | SuccessLoginData)=> {
    console.log(targetAPI)
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
    console.log("parsowane dane to")
    console.log(parsedData)
    return parsedData as ReturnType
}
