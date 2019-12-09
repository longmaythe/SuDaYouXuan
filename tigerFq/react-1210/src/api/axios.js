import axios from "axios"
import { Config } from "@jest/types"

const service = axios.create({
    baseURL : "https://m.sdyxmall.com"
})


service.interceptors.request.use(config=>{
    return config
})


service.interceptors.response.use(res=>{
    return res.data
})


export default service