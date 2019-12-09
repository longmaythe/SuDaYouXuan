import React, { Component } from 'react'
import Head from "./head/head"
import Content from "./content/content"

export default class index extends Component {
    render() {
        return (
            <div>
                <Head></Head>
                <Content></Content>
            </div>
        )
    }
}
