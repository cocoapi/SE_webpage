import React, { Component } from 'react';
import { Row, Col } from 'antd';
import axios from 'axios';
import List from '../components/List';
import Ads from '../components/Ads';
import AddproductModal from '../components/AddproductModal';

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
    axios.get('http://localhost:3001/products')
      .then((res) => {
        console.log(res);
        this.setState({ newProducts: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Ads />
        <Row style={subTitle}>
          <Col span={4}>
              New Products
          </Col>
        </Row>
        <List products={this.state.newProducts} />
        <Row style={subTitle}>
          <Col span={4}>
              Best Items
          </Col>
        </Row>
        <List products={this.state.bestProducts} />
      </div>
    );
  }
}

export default Front;
