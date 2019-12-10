import React, { Component } from 'react'
import Head from "./head/head"
import Content from "./content/content"
import {BrowserRouter as Router,Route} from 'react-router-dom'
import {classifyRouter} from '../../routers/index'

export default class index extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Head></Head>
                    {
                        classifyRouter.map((item)=>{
                            return <Route key={item.pathname} path={item.pathname} component={item.component} exact></Route>
                        })
                    }
                </Router>
            </div>
        )
    }
}
