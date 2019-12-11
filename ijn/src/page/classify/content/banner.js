import React, { Component } from 'react'
import ReactSwiper from 'reactjs-swiper'
import '../../../assets/css/classify/classify.css'

const items = [{
    image: 'https://mall.s.maizuo.com/2689398de4c822619d3cd4cfbacc47f6.jpg?x-oss-process=image/resize,w_563',
    title: '图片1',
    link: '/'
  }, {
    image: 'https://mall.s.maizuo.com/1f882180f6cc8b93bc694dea74cad09d.jpg?x-oss-process=image/resize,w_563',
    title: '图片2',
    link: '/'
  }, {
    image: 'https://mall.s.maizuo.com/a3c632287700ade056fb351b77e5ca90.jpg?x-oss-process=image/resize,w_563',
    title: '图片3',
    link: '/'
  },]

  const swiperOptions = {
    preloadImages: true,
    autoplay: 4000,
    autoplayDisableOnInteraction: false
  }

export default class banner extends Component {
    render() {
        return (
                <div>
                    <ReactSwiper 
                        swiperOptions={swiperOptions} 
                        showPagination items={items}
                        className="swiper-example" 
                    />
                </div>
        )
    }
}
