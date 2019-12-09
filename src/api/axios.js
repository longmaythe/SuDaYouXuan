import axios from 'axios'
const service = axios.create({
    baseURL:"http://47.95.207.1:8080/v1"
}) 
service.interceptors.request.use(config=>{
    return config
})
service.interceptors.response.use(res=>{
    return res
})

export default service