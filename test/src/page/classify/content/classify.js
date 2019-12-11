import React, { Component } from 'react'
import '../../../assets/css/classify/classify.css'
import {Link,withRouter} from 'react-router-dom'
const classArr = [{
    img:'https://mall.s.maizuo.com/e266648db6aac52055911461dc2dd6b4.jpg?x-oss-process=image/resize,w_113',
    title:'礼包券专区',
    introduce:'福利自己挑'
},{
    img:'https://mall.s.maizuo.com/9beeea529b10ea5ad797c6a82609dcfa.jpg?x-oss-process=image/resize,w_113',
    title:'视频会员',
    introduce:'尊享会员特权'
},{
    img:'https://mall.s.maizuo.com/4b805938a65fb8f409ec16c1caf477f8.jpg?x-oss-process=image/resize,w_113',
    title:'苏打团建',
    introduce:'爱团队爱生活'
},{
    img:'https://mall.s.maizuo.com/0819b646148afc2beb49e061433ee3dc.jpg?x-oss-process=image/resize,w_113',
    title:'健康生活',
    introduce:'关爱员工健康'
},{
    img:'https://mall.s.maizuo.com/758cbd65bab56c65604b59b738de724e.jpg?x-oss-process=image/resize,w_113',
    title:'精选图书',
    introduce:'读书使人快乐'
},{
    img:'https://mall.s.maizuo.com/938cadf82fded879906b1e7f9f266603.jpg?x-oss-process=image/resize,w_113',
    title:'知识超市',
    introduce:'碎片化学习'
},{
    img:'https://mall.s.maizuo.com/4633c9616352cc539bf827540ce8a352.jpg?x-oss-process=image/resize,w_113',
    title:'超级券专区',
    introduce:'每天不限量'
},{
    img:'https://mall.s.maizuo.com/7aaf741203760a711606070f1cc21b5e.jpg?x-oss-process=image/resize,w_113',
    title:'新鲜花束',
    introduce:'点缀好心情'
},{
    img:'https://mall.s.maizuo.com/cbfd0482cdf3163680d0f0605bf6575d.jpg?x-oss-process=image/resize,w_113',
    title:'洗衣服务',
    introduce:'上门收送衣'
},]

class Classify extends Component {
    render() {
        return (
            <div className="classify-classify">
                {
                    classArr.map((item,index)=>{
                        return <div className="classify-classify-c" key={index}>
                            <Link to="/details">
                                <div className="classify-classify-c-c">
                                    <p className="classify-classify-c-title">{item.title}</p>
                                    <p className="classify-classify-c-introduce">{item.introduce}</p>
                                    <img src={item.img} />
                                </div>
                            </Link>
                        </div>        
                    })
                }
            </div>
        )
    }
}
export default withRouter(Classify)