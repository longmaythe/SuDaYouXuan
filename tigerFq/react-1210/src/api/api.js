import axios from "./axios"


export const getArticleList = ()=>{
   return axios.post("/gateway?parentId=260&pageSize=10&pageNum=1&k=6368957")
}