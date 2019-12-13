import React, { Component } from 'react'
import { Icon } from 'antd'
import CinImg from "../../../assets/img/cin.png"
import cinemaname from './cinemaName.js'
export default class Cinema extends Component {
    render() {
        return (
            <div className='nowPlaying cinema'>
                <div className="nowPlaying-title-bar">
                    <span className='nowPlaying-title-text'>推荐影院</span>
                    <span className="nowPlaying-to-all">全部<Icon type="right" /> </span>
                </div>
                <div className="recommendCinema-list">
                    <ul>
                        {
                            cinemaname.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <div className="recommendCinema-list-wrap">
                                            <img src={CinImg} />
                                            <div className="cinema-index">{index + 1}</div>
                                            <div className="cinema-location">
                                                <span className="cinema_name">{item.name}</span>
                                                <span className="cinema_address">{item.address}</span>
                                            </div>
                                            <div className="cinema-info">
                                                <span className="cinema-lowPrice">￥ {(item.lowPrice)/100} 起</span>
                                                <span className="cinema-distance">距离未知</span>
                                            </div>
                                        </div>
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
