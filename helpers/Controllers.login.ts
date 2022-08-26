import axios from "axios"

export const loginUser = async (username: string, password: string) => {
    const data = {
        "username": username,
        "password": password
    }
    const config = {
        method: "post",
        url: "https://tekbees-back-demo.herokuapp.com/users",
        data: data
    }
    const p1 = await axios(config)
        .then((res) => { return res.data })
        .catch((err) => { return err })
    return p1
}