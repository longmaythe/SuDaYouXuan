import React, { Component } from 'react'
import '../../../assets/css/classify/classify.css'
import {Icon} from 'antd'
import {Link,withRouter} from 'react-router-dom'

class head extends Component {
    render() {
        // console.log(this.props)
        const city = localStorage.getItem('city')?localStorage.getItem('city'):'未知'
        return (
            <div className="class-head">
                <div className="c-h-l">
                    <Icon type="home" />
                </div>
                <div className="c-h-c">
                    <div className="c-h-c-t">企业福利</div>
                </div>
                <div className="c-h-r">
                    <Link to="/localList">
                        <div className="c-h-r-local">
                            <p>{city}</p><Icon type="down" />
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}
export default withRouter(head)