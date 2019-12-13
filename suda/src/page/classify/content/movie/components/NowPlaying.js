import React, { Component } from 'react'
import { Icon } from 'antd'
import data from './data.js'
export default class NowPlaying extends Component {
    render() {
        return (
            <div className='nowPlaying'>
                <div className="nowPlaying-title-bar">
                    <span className='nowPlaying-title-text'>正在热映</span>
                    <span className="nowPlaying-to-all">全部<Icon type="right" /> </span>
                </div>
                <div className="row-scroll-wrapper">
                    <ul>
                        {
                            data.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <div className="scroll_img">
                                            <img src={item.poster} />
                                        </div>
                                        <span className="nowPlaying-film-grade">观众评分 7.2</span>
                                        <span className="nowPlaying-film-name">{item.name} </span>
                                        <div className="buy-btn">购票</div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
