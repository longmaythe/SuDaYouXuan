import React, { Component } from 'react'
import {Icon} from 'antd'
import {Link} from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div className='team_header'>
                <Link to="/classify">
                    <div className='team_left'>
                        <Icon type="left" />
                    </div>
                </Link>
            </div>
        )
    }
}
