import React  from 'react'
import {render} from 'react-dom'
import App from './App'
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import {mainRoute} from './router/index'
import './assets/js/rem'
import './assets/css/global.css'
render(
    (
        <Router>
            <Switch>
                    <Route path='/user' render={(routerProps)=><App {...routerProps}/>}/>
                    {
                        mainRoute.map(item=>{
                            return <Route key={item.pathname} path={item.pathname} component={item.component}/>
                        })
                    }
            </Switch>     
        </Router>
    )
,document.getElementById("root"))
  