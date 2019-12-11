import React, { Component } from 'react'
import Head from './details/head'
import List from './details/list'

export default class Details extends Component {
    render() {
        return (
            <div>
                <Head></Head>
                <List></List>
            </div>
        )
    }
}
