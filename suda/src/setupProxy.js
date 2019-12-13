const proxy = require('http-proxy-middleware')

module.exports = (app)=>{
    app.use('/api',proxy({
        target:'http://localhost:13000/',
        changeOrigin:true,
        pathRewrite:{
            '^/api':'/'
        },
        secure:false
    }))
}