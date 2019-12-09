import axios from './axios'

export const getLoginData=()=>{
    return axios.post("/user/login")
}
export const getRegData=()=>{
    return axios.post("/user/reg")
}