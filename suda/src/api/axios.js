import axios from "axios"
import { Config } from "@jest/types"

const service = axios.create({
    baseURL : "/api"
})


service.interceptors.request.use(
    config=>{
        // console.log(config)
        return config
    }
)


service.interceptors.response.use(res=>{
    return res
})


export default service