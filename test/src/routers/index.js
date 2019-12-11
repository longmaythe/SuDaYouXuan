import {ClassIfy,Home,My,ShoppingCar,NotFound,Content,localList,Details} from "../page"

export const routers = [{
    pathname:'/classify',
    component:ClassIfy,
    hasFoot:'true'
},{
    pathname:'/my',
    component:My,
    hasFoot:'true'
},{
    pathname:'/home',
    component:Home,
    hasFoot:'true'
},{
    pathname:'/shoppingcar',
    component:ShoppingCar,
    hasFoot:'true'
},{
    pathname:'/localList',
    component:localList,
    hasFoot:'false'
},{
    pathname:'/details',
    component:Details,
    hasFoot:'false'
},{
    pathname:'/*',
    component:NotFound,
    hasFoot:'true'
},]
// console.log(ClassIfy)
// export const classifyChildren = routers[0].children
// console.log(classifyChildren)