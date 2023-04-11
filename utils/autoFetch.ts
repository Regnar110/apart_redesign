

export const autoFetch =  async <ReturnType, PayloadType>(targetAPI:string, payload?:PayloadType) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/${targetAPI}`, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: payload ? JSON.stringify({payload}) : ""
    })
    const data = await res.json()
    const fetchedData:ReturnType = data
    return fetchedData;
}

// Jest to Funkcja generyczna, która służy do pobierania danych z użyciem POST z api wskazanego przez użytkownika. Może zawierać ciało requestu, którego typ jest
//predefiniowany przez użytkownika przy użyciu funkcji. 