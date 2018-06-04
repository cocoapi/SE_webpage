import React, { Component } from 'react';
import { Carousel } from 'antd';
import '../App.css'


class Ads extends Component {
  render() {
    return (
      <Carousel autoplay>
        <div><img alt='ad1' src='http://mjsong.iptime.org:3001/ads/1' style={{width: '100%'}}/></div>
        <div><img alt='ad2' src='http://mjsong.iptime.org:3001/ads/2' style={{width: '100%'}}/></div>
        <div><img alt='ad3' src='http://mjsong.iptime.org:3001/ads/3' style={{width: '100%'}}/></div>
        <div><img alt='ad4' src='http://mjsong.iptime.org:3001/ads/4' style={{width: '100%'}}/></div>
      </Carousel>
    );
  }
}

export default Ads;
