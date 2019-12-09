// import Loadable from 'react-loadable'

// const Index=Loadable({
//     loader:()=>import('./index/index'),
//     loading:()=>import('./Loading/index')
// })
// const My=Loadable({
//     loader:()=>import('./my/index'),
//     loading:()=>import('./Loading/index')
// })
// const ShopCar=Loadable({
//     loader:()=>import('./shopcar/index'),
//     loading:()=>import('./Loading/index')
// })
// const WelFare=Loadable({
//     loader:()=>import('./welfare/index'),
//     loading:()=>import('./Loading/index')
// })
// const NotFound=Loadable({
//     loader:()=>import('./notfound/index'),
//     loading:()=>import('./Loading/index')
// })

import Index from './index/index'
import My from './my/index'
import ShopCar from './shopcar/index'
import WelFare from './welfare/index'
import NotFound from './notfound/index'

export {
    Index,
    My,
    ShopCar,
    WelFare,
    NotFound
}