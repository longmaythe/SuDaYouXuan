import {ClassIfy,Home,My,ShoppingCar,NotFound} from "../page"

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