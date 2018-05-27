import React, { Component} from 'react';
import {Row, Col, Card} from 'antd';
import { Link } from 'react-router-dom';
import List from '../components/List';
import Ads from '../components/Ads';



const subTitle = {
  borderBottom: "1px solid gray", 
  marginBottom: "10px", 
  fontSize: '20px', 
  paddingBottom:'20px',
  marginTop:'150px'
}

const products = [{
    title: "진삼국무쌍",
    price: "45000"
  },{
    title: "SuperMario",
    price: "20000"
  },{
    title: "히트맨",
    price: "30000" 
  },{
    title: "드래곤볼",
    price: "23400"
  },{
    title: "드래곤볼",
    price: "23400"
  },{
    title: "드래곤볼",
    price: "23400"
  },{
    title: "드래곤볼",
    price: "23400"
  },{
    title: "드래곤볼",
    price: "23400"
  }
]


class Front extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: products
    } 
  }

  render() {
    return (
      <div>
        <Ads/>
        <Row style={subTitle}>
            <Col span={4}>
              Product Detail 
            </Col>
        </Row>
        <List products={products}/>

      </div>
    );
  }
}

export default Front;
