import axios from "axios"
import { Config } from "@jest/types"

const service = axios.create({
    baseURL : "http://localhost:13000"
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