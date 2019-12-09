import React,{Component} from 'react';
import {getList} from "./api/api"
import ClassIfy from "./page/classify/index"
import 'antd/es/date-picker/style/css'
import Foot from "./page/classify/foot/foot"
import {BrowserRouter as Router,Switch,Route,Redirect,withRouter} from "react-router-dom"
import {routers} from './routers/index'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            list:[]
        }
    }
    // componentDidMount(){
    //     const obj = {type:1,wd:'',pageSize:10,pageNum:2,k:9586128}
    //     getList(obj).then((res)=>{
    //         console.log(res)
    //     })
    // }
    render(){
        return(
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
        )
    }
}

export default App;
