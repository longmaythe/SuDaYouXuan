const proxy = require('http-proxy-middleware')

module.exports = (app)=>{
    app.use("/api",proxy({
        targrt:"http://localhost:13000",
        changeOrigin:true,//是否跨域
        pathRewrite:{
            '^/api':'/'
        },
        secure:false,//是否为https
    }))
}