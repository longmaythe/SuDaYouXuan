import React, { Component } from 'react'
import '../../../assets/css/classify/classify.css'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Activity extends Component {
    render() {
        // console.log(this.props)
        return (
            <div className="classify-activity">
                <Link to="/classify/movie">
                    <div className="c-a-l">
                        <img src="https://mall.s.maizuo.com/9f0e18a832e048235b2f596af9b5cfc2.jpg?x-oss-process=image/resize,w_563"/>
                            <span className="c-a-l-title">热映大片</span>
                            <span className="c-a-l-introduce">电影院走起</span>
                    </div>
                </Link>
                
                <div className="c-a-r">
                    <Link>
                        <div className="c-a-r-t">
                            <img src="https://mall.s.maizuo.com/84b2104ca4c670ee52f8bd3ba0be392e.jpg?x-oss-process=image/resize,w_563"/>
                            <span className="c-a-r-t-title">福享新春</span>
                            <span className="c-a-l-introduce">温馨好礼</span>
                        </div>
                    </Link>
                    <Link>
                        <div className="c-a-r-b">
                            <img src="https://mall.s.maizuo.com/3524f2a95e57a92bcf25fedbcb203ff7.jpg?x-oss-process=image/resize,w_563"/>
                            <span className="c-a-r-b-title">西饼蛋糕</span>
                            <span className="c-a-l-introduce">全球优质风味</span>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}
export default Activity