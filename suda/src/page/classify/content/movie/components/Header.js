import React, { Component } from 'react'
import {Icon} from 'antd'
import {Link} from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div className='team_header'>
                <div className='team_left'>
                    <Link to="/classify">
                        <Icon type="left" />
                    </Link>
                </div>
            </div>
        )
    }
}
