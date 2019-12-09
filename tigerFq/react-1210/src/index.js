import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom"
import 'antd/dist/antd.css';
import "./assets/css/global.css"
import './rem'
import { MainRoutes } from './routes/index'

ReactDOM.render(
    (
        <Router>
            <Switch>
                {/* <Route path="/index" render={(routerProps)=><App {...routerProps}/>}></Route> */}
                {
                    MainRoutes.map((item) => {
                        return <Route path={item.pathname} component={item.component} />
                    })
                }
                <Redirect to="/index" from="/" exact></Redirect>
            </Switch>
        </Router>
    ), document.getElementById('root'));

