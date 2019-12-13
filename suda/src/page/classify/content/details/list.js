import React, { Component } from 'react'
import {Icon} from 'antd'
import {getList} from '../../../../api/api'
import axios from '../../../../api/axios'
import BScroll from 'better-scroll'
import { List, message, Avatar, Spin } from 'antd';
import reqwest from 'reqwest';
import InfiniteScroll from 'react-infinite-scroller';
// import {pullUpLoad} from 'better-scroll'

class Lists extends Component {
    constructor(props){
        super(props)
        this.state = {
            list : []
        }
    }
    componentDidMount(){
        let listId = 1
        if(localStorage.getItem('listId')){
            listId = localStorage.getItem('listId')
        }
        axios.get('/list',{
            params:{
                listId
            }
        }).then((res)=>{
            this.setState({
                list:res.data
            })
            // this.scroll.refresh()
        }).catch((err)=>{
            console.log(err)
        })
        const wrapper = document.querySelector('.c-d-l-content')
        let scroll = new BScroll(wrapper,{
            scrollY: true,
            click: true,
            scrollX:false,
            pullUpLoad:true,
        })
        console.log(wrapper)
        wrapper.addEventListener('pullingUp',()=>{
            console.log('asd')
        })
        
    }
    render() {
        return (
            <div className='classify-details-list'>
                <div className="c-d-l-head">
                    <div className="c-d-l-h-c">
                        <ul>
                            <li className="c-d-l-h-c-u-l-activity">
                                休闲零食
                            </li>
                            <li>
                                休闲零食
                            </li>
                            <li>
                                休闲零食
                            </li>
                            <li>
                                休闲零食
                            </li>
                            <li>
                                休闲零食
                            </li>
                        </ul>
                    </div>
                    <div className="c-d-l-h-h">
                        <div className="c-d-l-h-h-i">
                            <div className="c-d-l-h-h-carve">
                                <Icon type="down" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="c-d-l-content">
                    <ul>
                        {
                            this.state.list.map((item,index)=>{
                                // console.log(item)
                                return <li key={index}>
                                    <div className="c-d-l-c-u-l-img">
                                        <img src={item.sku.imgUrl}/>
                                    </div>
                                    <div className="c-d-l-c-u-l-name p-hidden">{item.masterName}</div>
                                    <div className="c-d-l-c-u-l-more p-hidden">{item.slaveName}</div>
                                    <div className="c-d-l-c-u-l-price">
                                        <span className="c-d-l-c-u-l-p-1">￥</span>
                                        <span className="c-d-l-c-u-l-p-2">{item.sku.price / 100}</span>
                                    </div>
                                </li>    
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
export default Lists