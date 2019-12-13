import React, { Component } from 'react'
import "../../../assets/css/classify/classify.css"
import {Link} from 'react-router-dom'
import {Icon} from 'antd'
import axios from '../../../api/axios'

const hotCity = ['北京','上海','广州','深圳','重庆','武汉']

export default class localList extends Component {
    constructor(props){
        super(props)
        this.state = {
            city : []
        }
    }
    componentDidMount(){
        axios.get('/city').then(
            (res)=>{
                console.log(res.data)
                this.setState({
                    city : res.data,
                    Letter:['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
                })
            }
        ).catch((err)=>{
            console.log(err)
        })
    }
    render() {
        return (
            <div className="classify-loaclList">
                <div className="c-l-head">
                    <div className="c-l-h-head">
                        <Link to="/classify">
                            <div className="c-l-h-h-l">
                                <Icon type="close" />
                            </div>
                        </Link>
                        <div className="c-l-h-h-c">
                            当前城市&nbsp;-&nbsp;未知
                        </div>
                    </div>
                    <div className="c-l-h-inp">
                        <Icon type="search" />
                        <input type="text" placeholder="输入城市名或拼音"/>
                        <p>取消</p>
                    </div>
                </div>
                <div className="c-l-center">
                    <div className="c-l-c-head">
                        <div className="c-l-c-h-GPS">
                            <div className="c-l-c-h-g-title">
                                GPS定位你所在城市
                            </div>
                            <div className="c-l-c-h-g-detail">
                                <div className="c-l-c-h-g-d-city">
                                    <p>
                                        定位失败
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="c-l-c-h-hot">
                            <div className="c-l-c-h-g-title">
                                热门城市
                            </div>
                            <div className="c-l-c-h-g-detail">
                                {
                                    hotCity.map((item,index)=>{
                                        return <Link to="/classify" key={index} onClick={this.city.bind(this,item)}>
                                            <div className="c-l-c-h-g-d-city">
                                                <p>
                                                    {item}
                                                </p>
                                            </div>
                                        </Link>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="c-l-c-content">
                        {
                            this.state.city.map((items,index)=>{
                                if(items.length){
                                    return <div key={index} className="c-l-c-c-letter">
                                        <p >{this.state.Letter[index]}</p>
                                        <ul>
                                            {
                                                items.map((item,indexs)=>{
                                                    return <Link key={indexs} to="/classify" onClick={this.city.bind(this,item.name)}>
                                                        <li>
                                                            {item.name}
                                                        </li>
                                                    </Link>
                                                })
                                            }
                                        </ul>
                                    </div>
                                }else{
                                    return <div className="c-l-c-c-letter"  key={index}>
                                        <p >{this.state.Letter[index]}</p>
                                        <ul>
                                            <li>
                                                未知
                                            </li>
                                        </ul>
                                    </div>
                                }
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
    city(item){
        localStorage.setItem('city',item)
    }
}
const Letter = ['a','b','c','d','e','f','g','h','i','j','k','k','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
