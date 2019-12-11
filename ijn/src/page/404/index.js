import React, { Component } from 'react'
import Img from '../../assets/img/404.jfif'

export default class notFound extends Component {
    render() {
        return (
            <div style={{width:'100%',height:'100%'}}>
                <img src={Img} style={{width:'100%',height:'100%'}}/>
            </div>
        )
    }
}
