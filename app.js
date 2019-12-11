const Koa = require("koa")
const static = require("koa-static")
const Router = require("koa-router")
const bodyparser = require("koa-bodyparser")
const db = require("./modules/db")
const cros = require("koa2-cors")

const app = new Koa()
const router = new Router()

app.keys = ['some secret hurr'];//设置cookie密钥

app
    // .use(cros())
    .use(static(__dirname + "/public"))
    .use(bodyparser())
    .use(router.routes())
    .use(router.allowedMethods())
//商品列表

router.get("/list",async ctx=>{
    const arr = await db.find("giftList")
    ctx.body = arr
    // const index = ctx.query.pageIndex - 0
    // const size = ctx.query.pageSize - 0
    // let count = await db.getCount("list",{})
    // count = Math.ceil(count /size)
    // if(index&&size){
    //     const arr = await db.findList("list",{},index,size)
    //     console.log(arr)
    //     ctx.body=JSON.stringify({
    //         success:1,
    //         data:{
    //             index,
    //             size,
    //             count,
    //             list:arr
    //         },
    //         error:null
    //     })
    // }else{
    //     ctx.status = 400
    //     ctx.body=JSON.stringify({
    //         success:0,
    //         data:null,
    //         error:{
    //             errorCode:11706,
    //             error:"参数异常"
    //         }
    //     })
    // }
    // console.log(ctx.query)
})

app.listen(13000, _ => {
    console.log("listen to localhost:13000")
})




