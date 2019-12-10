import React, { Component } from 'react'
import Head from "./head/head"
import Content from '../../page/classify/content/content'

export default class ClassIfyIndex extends Component {
    
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