
export const handleLoginOrRegister = async <ReturnType>(targetAPI:string)=> {
    console.log(targetAPI)
    const responseData = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/loginpage/${targetAPI}`)
    const parsedData = await responseData.json();
    return parsedData as ReturnType
}
