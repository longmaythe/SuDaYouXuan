import React, { Component } from 'react'
import "../../../assets/css/foot.css"
import { Icon } from 'antd'
import { BrowserRouter as Router,Link,withRouter } from 'react-router-dom'

class foot extends Component {
    render() {
        return (
            <ul className="foot_ul">
                <Link to="/home" onClick={this.click}>
                    <li>
                            <Icon type="home" />
                            <span>首页</span>
                    </li>
                </Link>
                <Link to="/classify" onClick={this.click}>
                    <li>
                            <Icon type="shopping" />
                            <span>企业福利</span>
                    </li>
                </Link>
                <Link to="/shoppingcar" onClick={this.click}>
                    <li>
                            <Icon type="shopping-cart" />
                            <span>购物车</span>
                    </li>
                </Link>
                <Link to="/my" onClick={this.click}>
                    <li>
                            <Icon type="smile" />
                            <span>我的</span>
                    </li>
                </Link>
            </ul>
        )
    }
    click = ()=>{
        // console.log(this.props)
    }
}
export default withRouter(foot)