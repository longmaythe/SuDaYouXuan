import axios from "./axios"


export const getArticleList = ()=>{
   return axios.post("/api/articleList")
}

export const getDeleteArticleListOne = (id) =>{
   return axios.post("/api/deleteArticle",{
      id
   })
}

export const getArticleEdit = (id,title,author,createAt) =>{
   return axios.post("/api/articleEdit",{
      id,
      title,
      author,
      createAt
   })
}

export const getList = (...obj) => {
    return axios.get("/gateway",{
        params:{
            ...obj
        }
    })
}