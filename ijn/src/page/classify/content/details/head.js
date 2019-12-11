import React, { Component } from 'react'
import '../../../../assets/css/classify/classify.css'
import {Icon} from 'antd'
import {Link} from 'react-router-dom'

export default class Head extends Component {
    render() {
        return (
            <div className='classify-details-head'>
                <div className="c-d-h-l">
                    <Link to="/classify">
                        <Icon type="left" />
                    </Link>
                </div>
                <div className="c-d-h-c">
                    礼包券专区
                </div>
                <div className="c-d-h-r">
                    <Icon type="search" />
                </div>
            </div>
        )
    }
}
