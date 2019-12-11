import React, { Component } from 'react'
import '../../../assets/css/classify/classify.css'
const imgSrc = "https://mall.s.maizuo.com/e266648db6aac52055911461dc2dd6b4.jpg?x-oss-process=image/resize,w_113"
const arr = [
    1,2,3,4,5,6,7,8,9
]

export default class Classify extends Component {
    render() {
        return (
            <div className="classify-classify">
                {
                    arr.map((item,index)=>{
                        return <div className="classify-classify-c" key={index}>
                            <div className="classify-classify-c-c">
                                <p className="classify-classify-c-title">礼包券专区</p>
                                <p className="classify-classify-c-introduce">福利自己挑</p>
                                <img src={imgSrc} />
                            </div>
                        </div>        
                    })
                }
            </div>
        )
    }
}
