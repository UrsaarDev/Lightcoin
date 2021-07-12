import request from "../lib/fetch";


const login = (address, signature, hash) => {
    return request("https://auth.clucoin.com/v1/connect",  {
        method: "POST",
        body: JSON.stringify({
            address,
            signature,
            hash,
        }),
    })
    .then((data) => {
        console.log(data);
        return data;
    })
    .catch((err: any) => {
      console.log("ERR:", err);
    });
}

export default  login