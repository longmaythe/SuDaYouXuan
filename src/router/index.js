import {
    My,
    Login,
    Reg,
    NotFound,
} from '../pages'

export const mainRoute = [{
    pathname: "/my",
    component: My
},{
    pathname:"/:id",
    component:NotFound
}]
export const adminRouter =[{
    pathname:"/user/login",
    component: Login
},{
    pathname:"/user/reg",
    component: Reg
}]