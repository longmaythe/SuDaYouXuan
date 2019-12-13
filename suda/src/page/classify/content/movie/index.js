import React, { Component } from 'react'
import "../../../../assets/css/classify/movie.css"
import Banner from './components/Banner'
import Header from './components/Header'
import NowPlaying from './components/NowPlaying'
import ComingSoon from './components/ComingSoon'
import Cinema from './components/Cinema'
import '../../../../assets/css/classify/team.css'
export default class Movie extends Component {
    render() {
        return (
            <div className='movie'>
                <Header />
                <div className="movie-slideshow">
                    <Banner />
                </div>
                <NowPlaying />
                <ComingSoon />
                <Cinema />
            </div>
        )
    }
}
