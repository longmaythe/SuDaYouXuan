import React, { Component } from 'react'
import ReactSwiper from 'reactjs-swiper';
// import '../../../assets/css/banner.css'


const ReactSwiperExample = () => {
    const items = [{
        image: 'https://mall.s.maizuo.com/e2c387cb5b58683af9c2826cd96c13c4.jpg?x-oss-process=image/quality,Q_70',
    }, {
        image: 'https://mall.s.maizuo.com/588a7a7b6d64e53bb3b05c03752c2b2a.jpg?x-oss-process=image/quality,Q_70',

    }, {
        image: 'https://mall.s.maizuo.com/71c59fe64c533ef0b753f1cf47021387.jpg?x-oss-process=image/quality,Q_70',
    }, {
        image: 'https://mall.s.maizuo.com/281da7ed326692ae00869192632e814c.jpg?x-oss-process=image/quality,Q_70',
    },{
        image: 'https://mall.s.maizuo.com/a5b91585c174c712e74b3c6e11c3e373.jpg?x-oss-process=image/quality,Q_70',
    }];
    const swiperOptions = {
        preloadImages: true,
        autoplay: 4000,
        autoplayDisableOnInteraction: false
    };
    return (
        <ReactSwiper swiperOptions={swiperOptions} showPagination items={items}
            className="swiper-example" />
    );
};

class Banner extends Component {
    render() {
        return (
            <div>
                <ReactSwiperExample />
            </div>
        )
    }
}

export default Banner
