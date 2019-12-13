import React,{Component} from 'react';
import 'antd/es/date-picker/style/css'
import Foot from "./page/classify/foot/foot"
import {BrowserRouter as Router,Switch,Route,Redirect,withRouter} from "react-router-dom"
import {routers} from './routers/index'
import { Provider } from "react-redux"

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            list:[]
        }
    }
    render(){
        return(
            <div>
                    <Router>
                        <Switch>
                            <Redirect to="/home" from="/" exact/>
                           {
                                routers.map((item,index)=>{
                                    // console.log(item)
                                    return <Route key={item.pathname} path={item.pathname} component={item.component} exact={item.exact}/>
                                })
                            }
                        </Switch>
                        <Foot></Foot>
                    </Router>
            </div>
        )
    }
}

export default App;
