const MongoClient = require("mongodb").MongoClient

class Db {
    static createDB(){
        if(!Db.install){
            Db.install = new Db()
            return new Db()
        }
    }
    constructor(){

    }
    connect(){
        const that = this
        //返回一个实例
        return new Promise((ressolve,reject)=>{
            //连接数据库
            if(!that.db){
                MongoClient.connect(
                    //数据库地址
                    "mongodb://127.0.0.1:27017",
                    //解决兼容
                    {useNewUrlParser:true},
                    //链接
                    (err,client)=>{
                        //判断是否有错
                        if(err){
                            //抛出异常
                            reject(err)//失败时回调函数
                            throw new TypeError(err)
                        }
                        //确定要连接的数据库
                        that.db = client.db("suda")
                        //返回这个链接
                        ressolve(that.db)
                    }
                )    
            }else{
                ressolve(that.db)
            }
        })
    }
    //增
    insert(cname,obj){
        const that = this
        return new Promise(
            (ressolve,reject)=>{
                //调用类中connect方法调用数据库
                that.connect().then(db=>{
                    db.collection(cname).insertOne(obj,(err,result)=>{
                        if(err){
                            reject(err)
                            throw new TypeError(err)
                        }
                        ressolve(result)
                    })
                })
            }
        )
    }
    //删
    dels(cname,obj){
        const that = this
        return new Promise(
            (ressolve,reject)=>{
                //调用类中connect方法调用数据库
                that.connect().then(db=>{
                    db.collection(cname).remove(obj,(err,result)=>{
                        if(err){
                            reject(err)
                            throw new TypeError(err)
                        }
                        ressolve(result)
                    })
                })
            }
        )
    }
    //改
    updata(cname,obj,robj){
        robj = {$set:robj}
        console.log(obj,robj)
        const that = this
        return new Promise(
            (ressolve,reject)=>{
                //调用类中connect方法调用数据库
                that.connect().then(db=>{
                    db.collection(cname).updateOne(obj,robj,(err,result)=>{
                        if(err){
                            reject(err)
                            throw new TypeError(err)
                        }
                        ressolve(result)
                    })
                })
            }
        )
    }
    //查
    findList(cname,obj,index,size){
        const that = this
        return new Promise((ressolve,reject)=>{
                //调用类中connect方法调用数据库
                that.connect().then(db=>{
                    db.collection(cname).find(obj).limit(size).skip((index-1)*size).toArray((err,doc)=>{
                        if(err){//抛出异常
                            reject(err)
                            throw new TypeError(err)
                        }
                        ressolve(doc)//返回遍历后的值
                        // console.log(doc)
                    })
                })
            }
        )
    }
    find(cname,obj){
        const that = this
        return new Promise((ressolve,reject)=>{
                //调用类中connect方法调用数据库
                that.connect().then(db=>{
                    db.collection(cname).find(obj).toArray((err,doc)=>{
                        if(err){//抛出异常
                            reject(err)
                            throw new TypeError(err)
                        }
                        ressolve(doc)//返回遍历后的值
                        // console.log(doc)
                    })
                })
            }
        )
    }
    getCount(cname,obj){
        const that = this
        return new Promise((ressolve,reject)=>{
                //调用类中connect方法调用数据库
                that.connect().then(db=>{
                    db.collection(cname).count(obj,(err,doc)=>{
                        if(err){//抛出异常
                            reject(err)
                            throw new TypeError(err)
                        }
                        ressolve(doc)//返回遍历后的值
                        // console.log(doc)
                    })
                })
            }
        )
    }
    getCountLike(cname,obj){
        const that = this
        return new Promise((ressolve,reject)=>{
                //调用类中connect方法调用数据库
                that.connect().then(db=>{
                    db.collection(cname).find(obj).count({},(err,doc)=>{
                        if(err){//抛出异常
                            reject(err)
                            throw new TypeError(err)
                        }
                        ressolve(doc)//返回遍历后的值
                        // console.log(doc)
                    })
                })
            }
        )
    }
}
module.exports = Db.createDB()
