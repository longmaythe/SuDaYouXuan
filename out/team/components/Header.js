import React, { Component } from 'react'
import {Icon} from 'antd'
export default class Header extends Component {
    render() {
        return (
            <div className='team_header'>
                <div className='team_left'>
                    <Icon type="left" />
                </div>
            </div>
        )
    }
}
