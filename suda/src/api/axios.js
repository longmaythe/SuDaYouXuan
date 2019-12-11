import axios from "axios"
import { Config } from "@jest/types"

const service = axios.create({
<<<<<<< HEAD
<<<<<<< HEAD
    baseURL : "https://localhost:13000"
=======
    baseURL : "https://m.sdyxmall.com"
>>>>>>> parent of 578089a... add someone
=======
    baseURL : "https://m.sdyxmall.com"
>>>>>>> parent of 578089a... add someone
})


service.interceptors.request.use(config=>{
    console.log(config)
    config.headers = {
        ...config.headers,
        authToken : "12312312312312312"
    }
    return config
})


service.interceptors.response.use(res=>{
    return res.data
})


export default service