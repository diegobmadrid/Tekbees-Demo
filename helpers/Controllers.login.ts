import axios from "axios"

export const loginUser = async () => {
    const config = {
        url: "https://tekbees-back-demo.herokuapp.com/",
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    }
    const p1 = await axios(config)
        .then((res) => { return res.data })
        .catch((err) => { return err })
    return p1
}