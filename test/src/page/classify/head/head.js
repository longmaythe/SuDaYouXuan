import React, { Component } from 'react'
import '../../../assets/css/classify/classify.css'
import {Icon} from 'antd'

export default class head extends Component {
    render() {
        return (
            <div className="class-head">
                <div className="c-h-l">
                    <Icon type="home" />
                </div>
                <div className="c-h-c">
                    <div className="c-h-c-t">企业福利</div>
                </div>
                <div className="c-h-r">
                    <div className="c-h-r-local">
                        北京市<Icon type="down" />    
                    </div>
                </div>
            </div>
        )
    }
}
