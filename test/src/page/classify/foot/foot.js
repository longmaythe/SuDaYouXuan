import React, { Component } from 'react'
import "../../../assets/css/foot.css"
import { Icon } from 'antd'
import { BrowserRouter as Router,Link } from 'react-router-dom'

export default class foot extends Component {
    render() {
        return (
            <Router>
                <ul className="foot_ul">
                        <Link to="/home">
                            <li>
                                    <Icon type="home" />
                                    <span>首页</span>
                            </li>
                        </Link>
                        <Link to="/classify">
                            <li>
                                    <Icon type="shopping" />
                                    <span>企业福利</span>
                            </li>
                        </Link>
                        <Link to="/shoppingcar">
                            <li>
                                    <Icon type="shopping-cart" />
                                    <span>购物车</span>
                            </li>
                        </Link>
                        <Link to="/my">
                            <li>
                                    <Icon type="smile" />
                                    <span>我的</span>
                            </li>
                        </Link>
                </ul>
            </Router>
        )
    }
}
