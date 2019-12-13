import React, { Component } from 'react'
import Head from './details/head'
import List from './details/list'

class Details extends Component {
    render() {
        return (
            <div>
                <Head></Head>
                <List/>
            </div>
        )
    }
}
export default Details