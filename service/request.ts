const request = async (url: string, method: string, payload: any) => {
    let res
    if (method == 'POST') {
        res = await fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
    } else {
        res = await fetch(url)
    }
    const {data} = await res.json()
    return data
}

request.get = (url: string) => request(url, 'GET', "")

request.post = (url: string, payload: any) => request(url, 'POST', payload)

export default request