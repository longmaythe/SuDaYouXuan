import {
    Index,
    My,
    ShopCar,
    WelFare,
    NotFound
} from '../pages/index'

export const MainRoutes = [
    {
        pathname: '/index',
        component: Index
    },
    {
        pathname: '/notfound',
        component: NotFound
    },
    {
        pathname: '/my',
        component: My
    },
    {
        pathname: '/shopcar',
        component: ShopCar
    },
    {
        pathname: '/welfare',
        component: WelFare
    },
]