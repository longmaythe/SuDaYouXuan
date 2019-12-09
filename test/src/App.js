import React,{Component} from 'react';
import {getList} from "./api/api"
import ClassIfy from "./page/classify/index"

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
            </div>
        )
    }
}

export default App;
