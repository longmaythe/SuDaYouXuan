import React, { Component } from 'react'
import Head from "./head/head"
import Content from '../../page/classify/content/content'
// import {getList} from '../../api/api'

export default class ClassIfyIndex extends Component {
    
    render() {
        return (
            <div>
                <Head/>
                <Content/>
            </div>
        )
    }
}