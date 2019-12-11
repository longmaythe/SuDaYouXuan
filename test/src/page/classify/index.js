import React, { Component } from 'react'
import Head from "./head/head"
import Content from '../../page/classify/content/content'
// import {getList} from '../../api/api'

export default class ClassIfyIndex extends Component {
    componentDidMount(){
        // getList().then((res)=>{
        //     console.log(res)
        // }).catch((err)=>{
        //     console.log(err)
        // })
    }
    render() {
        return (
            <div>
                <Head/>
                <Content/>
            </div>
        )
    }
}




// import React, { Component } from 'react'
// import Head from "./head/head"
// import Content from "./content/content"
// import {Route,Redirect,Switch} from 'react-router-dom'
// import {routers} from '../../routers/index'

// class Classify extends Component {
//     render() {
//         console.log(routers[0].children)
//         return (
//             <div>
//             </div>
//         )
//     }
// }
// export default Classify