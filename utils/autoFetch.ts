
export const autoFetch =  async <ReturnType>(targetAPI:string) => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/${targetAPI}`
    );
    const data = await res.json()
    const categories:ReturnType[] = data.categories


    return categories;
}