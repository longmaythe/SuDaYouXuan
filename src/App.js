import React ,{Component,Fragment} from 'react'
import {Route,Switch} from 'react-router-dom'
import {adminRouter} from './router/index'
class App extends Component{
    render(){
        return (
            <Fragment>
                <Switch>
                {
                    adminRouter.map(item=>{
                        return <Route key={item.pathname} path={item.pathname} render={(routerProps)=><item.component {...routerProps}/> } />
                    })
                }
                </Switch>
            </Fragment>
        )
    }
}
export default App