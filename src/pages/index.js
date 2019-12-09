
import Loadable from "react-loadable"
import Loading from '../component/loading'
const My = Loadable ({
    loader : ()=>import('./My/index'),
    loading : Loading
})
const Login = Loadable ({
    loader : ()=>import('./My/Login'),
    loading : Loading
})
const Reg = Loadable({
    loader : ()=>import('./My/Reg'),
    loading : Loading
})
const NotFound = Loadable({
    loader : ()=>import('./Not Fount'),
    loading : Loading
})
export {
    My,
    Login,
    NotFound,
    Reg
}