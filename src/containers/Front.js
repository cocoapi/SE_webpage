import React, { Component } from 'react';
import { Row, Col } from 'antd';
import axios from 'axios';
import List from '../components/List';
import Ads from '../components/Ads';
import AddproductModal from '../components/AddproductModal';
import Subtitle from '../components/Subtitle'

const subTitle = {
  borderBottom: '1px solid gray',
  marginBottom: '10px',
  fontSize: '20px',
  paddingBottom: '20px',
  marginTop: '150px',
};

// const productsss = [{
//     title: "진삼국무쌍",
//     price: "45000"
//   },{
//     title: "SuperMario",
//     price: "20000"
//   },{
//     title: "히트맨",
//     price: "30000"
//   },{
//     title: "드래곤볼",
//     price: "23400"
//   },{
//     title: "드래곤볼",
//     price: "23400"
//   },{
//     title: "드래곤볼",
//     price: "23400"
//   },{
//     title: "드래곤볼",
//     price: "23400"
//   },{
//     title: "드래곤볼",
//     price: "23400"
//   }
// ]


class Front extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newProducts: [],
      bestProducts: [],
    };
  }

  componentDidMount() {
    axios.get('http://mjsong.iptime.org:3001/products/list/all/all/1/release_date/-1') // 출시일에 대해 내림차순
      .then((res) => {
        console.log(res);
        var datas = res.data.slice(0,4);
        this.setState({ newProducts: datas });
      })
      .catch((error) => {
        console.log(error);
      });

      axios.get('http://mjsong.iptime.org:3001/products/list/all/all/1/total_sell/-1') // 판매량에 대해 내림차순
      .then((res) => {
        console.log(res);
        var datas = res.data.slice(0,4);
        this.setState({ bestProducts: datas });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Ads />
        <Subtitle title='New products'/>
        <List products={this.state.newProducts} />
        <Subtitle title='Best Products'/>
        <List products={this.state.bestProducts} />
      </div>
    );
  }
}

export default Front;
