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
    const listId = ctx.query.listId
    console.log(listId)
    let list = ''
    if(listId == 1){
        list = 'giftList'
    }else if(listId == 2){
        list = 'videoVipList'
    }else if(listId == 5){
        list = 'novelList'
    }else if(listId == 6){
        list = 'bookVipList'
    }else if(listId == 7){
        list = 'superVipList'
    }else if(listId == 8){
        list = 'flowerList'
    }else if(listId == 9){
        list = 'washList'
    }else{
        list = 'giftList'
    }
    const arr = await db.find(list)
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
router.get('/city',async ctx=>{
    const arr = await db.find('locallist')
    var a = [],
        b = [],
        c = [],
        d = [],
        e = [],
        f = [],
        g = [],
        h = [],
        i = [],
        j = [],
        k = [],
        l = [],
        m = [],
        n = [],
        o = [],
        p = [],
        q = [],
        r = [],
        s = [],
        t = [],
        u = [],
        v = [],
        w = [],
        x = [],
        y = [],
        z = [];

    arr.forEach((item,index)=>{
        // a.push(item.pinyin.split(0,1))
        if(item.pinyin.substring(0,1)=='a'){
            a.push(item)
        }else if(item.pinyin.substring(0,1)=='b'){
            b.push(item)
        }else if(item.pinyin.substring(0,1)=='c'){
            c.push(item)
        }else if(item.pinyin.substring(0,1)=='d'){
            d.push(item)
        }else if(item.pinyin.substring(0,1)=='e'){
            e.push(item)
        }else if(item.pinyin.substring(0,1)=='f'){
            f.push(item)
        }else if(item.pinyin.substring(0,1)=='g'){
            g.push(item)
        }else if(item.pinyin.substring(0,1)=='h'){
            h.push(item)
        }else if(item.pinyin.substring(0,1)=='i'){
            i.push(item)
        }else if(item.pinyin.substring(0,1)=='j'){
            j.push(item)
        }else if(item.pinyin.substring(0,1)=='k'){
            k.push(item)
        }else if(item.pinyin.substring(0,1)=='l'){
            l.push(item)
        }else if(item.pinyin.substring(0,1)=='m'){
            m.push(item)
        }else if(item.pinyin.substring(0,1)=='n'){
            n.push(item)
        }else if(item.pinyin.substring(0,1)=='o'){
            o.push(item)
        }else if(item.pinyin.substring(0,1)=='p'){
            p.push(item)
        }else if(item.pinyin.substring(0,1)=='q'){
            q.push(item)
        }else if(item.pinyin.substring(0,1)=='r'){
            r.push(item)
        }else if(item.pinyin.substring(0,1)=='s'){
            s.push(item)
        }else if(item.pinyin.substring(0,1)=='t'){
            t.push(item)
        }else if(item.pinyin.substring(0,1)=='u'){
            u.push(item)
        }else if(item.pinyin.substring(0,1)=='v'){
            v.push(item)
        }else if(item.pinyin.substring(0,1)=='w'){
            w.push(item)
        }else if(item.pinyin.substring(0,1)=='x'){
            x.push(item)
        }else if(item.pinyin.substring(0,1)=='y'){
            y.push(item)
        }else{
            z.push(item)
        }
    })
    const arrs = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z]
    ctx.body = arrs
})

app.listen(13000, _ => {
    console.log("listen to localhost:13000")
})




