import {ClassIfy,Home,My,ShoppingCar,NotFound,Content,localList,ShopList,Team, Movie} from "../page"

export const routers = [{
    pathname:'/classify',
    component:ClassIfy,
    hasFoot:'true',
    exact:true
},{
    pathname:'/my',
    component:My,
    hasFoot:'true',
    exact:true
},{
    pathname:'/home',
    component:Home,
    hasFoot:'true',
    exact:true
},{
    pathname:'/shoppingcar',
    component:ShoppingCar,
    hasFoot:'true',
    exact:true
},{
    pathname:'/localList',
    component:localList,
    hasFoot:'false',
    exact:true
},{
    pathname:'/classify/details',
    component:ShopList,
    hasFoot:'false',
    exact:false
},{
    pathname:'/classify/team',
    component:Team,
    hasFoot:'false',
    exact:false
},{
    pathname:'/classify/movie',
    component:Movie,
    hasFoot:'false',
    exact:false
},{
    pathname:'/*',
    component:NotFound,
    hasFoot:'true',
    exact:true
},]
// console.log(ClassIfy)
// export const classifyChildren = routers[0].children
// console.log(classifyChildren)