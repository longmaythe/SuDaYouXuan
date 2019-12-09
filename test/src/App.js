import React,{Component} from 'react';
import {getList} from "./api/api"
import ClassIfy from "./page/classify/index"
import 'antd/es/date-picker/style/css'
import Foot from "./page/classify/foot/foot"

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
            <div>
                <ClassIfy></ClassIfy>
                <Foot></Foot>
            </div>
        )
    }
}

export default App;
