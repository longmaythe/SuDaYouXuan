import {ClassIfy,Home,My,ShoppingCar,NotFound,Content,localList} from "../page"

export const routers = [{
    pathname:'/classify',
    component:ClassIfy
},{
    pathname:'/my',
    component:My
},{
    pathname:'/home',
    component:Home
},{
    pathname:'/shoppingcar',
    component:ShoppingCar
},{
    pathname:'/*',
    component:NotFound
},]

export const classifyRouter = [{
    pathname:'/conent',
    component:Content
},{
    pathname:'/locallist',
    component:localList
},]