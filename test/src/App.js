import React,{Component} from 'react';
import {getList} from "./api/api"
import ClassIfy from "./page/classify/index"
import 'antd/es/date-picker/style/css'
import Foot from "./page/classify/foot/foot"
import {BrowserRouter as Router,Switch,Route,Redirect,withRouter} from "react-router-dom"
import {routers} from './routers/index'
import { Provider } from "react-redux"
import store from "./store/store"

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
                <Provider store={store}>
                    <Router>
                        <Switch>
                            <Redirect to="home" from="/" exact/>
                            {
                                routers.map((item)=>{
                                    return <Route key={item.pathname} path={item.pathname} component={item.component} exact></Route>
                                })
                            }
                        </Switch>
                        <Foot></Foot>
                    </Router>
                </Provider>
            </div>
        )
    }
}

export default App;
