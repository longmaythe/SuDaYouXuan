import React, { Component } from 'react'
import { Icon } from 'antd'
import coming from './coming'
export default class NowPlaying extends Component {
    render() {
        return (

            <div className='nowPlaying comingSoon'>
                <div className="nowPlaying-title-bar">
                    <span className='nowPlaying-title-text'>即将上映</span>
                    <span className="nowPlaying-to-all">全部<Icon type="right" /> </span>
                </div>

                <div className="row-scroll-wrapper">
                    <ul>
                        {
                            coming.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <div className="scroll_img">
                                            <img src={item.poster} />
                                        </div>
                                        <span className="nowPlaying-film-name">{item.name}</span>
                                        <div className="comingSoon-film-premiereAt">12月12日</div>
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
