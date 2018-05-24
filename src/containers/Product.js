import React, { Component } from 'react';
import { Input, Button, Modal, Row, Col, InputNumber } from 'antd';
import { Link } from 'react-router-dom';
import Review from '../components/Review';

const dataSource ={
  productName: 'PS4 히트맨 DEFINITIVE EDITION',
  company: 'IO INTERACTIVE',
  price: '62,000원'
}

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Quantity: 0,
      dataSource: dataSource
    };
  }

  onChange = (value) =>{
    console.log('changed', value);
  }

  render() {
    return (
      <div>
        <Row type="flex" justify="space-around" style={{marginTop: '50px', marginBottom: '50px'}}>
          <Col span={8} style={{border: '1px solid black'}}>
            <div>
              <div style={{height:'530px'}}></div>
            </div>
          </Col>
          <Col span={8} style={{border:'1px solid black', padding: '25px'}}>
            <Row>
              <h2 style={{borderBottom:'1px solid black'}}> {this.state.dataSource.productName} </h2>
            </Row>
            <Row>
              제조사: {this.state.dataSource.company}
            </Row>
            <Row style={{marginTop:'190px', fontSize:'20px'}}>
              가격: {dataSource.price}
            </Row>
            <Row style={{marginTop:'50px', fontSize:'20px'}}>
              수량:  <InputNumber min={1} max={99} defaultValue={1} size='medium'/>
            </Row>
            <Row style={{marginTop:'100px'}}>
                <Button icon='credit-card' size='large' href='buy'style={{marginRight:'10px'}}> 주문하기 </Button>
                <Button icon='shopping-cart' size='large' onClick={() => {
                  Modal.success({ title:"장바구니에 추가되었습니다.", content: "장바구니를 확인하시겠습니까?",});
                }}> 장바구니 </Button>
            </Row>
          </Col>
        </Row>
        <Row style={{borderBottom: "1px solid gray", marginBottom: "10px"}}>
          <Col span={6}>
            Product detail
          </Col>
        </Row>
        <Row>
          <Col span={24}>
              <div style={{height:'500px'}}>

              </div>
          </Col>
        </Row>
        <Row style={{borderBottom: "1px solid gray", marginBottom: "10px"}}>
          <Col span={6}>
            Review
          </Col>
        </Row>
        <Row>
          <Col span={18} offset={3}>
          <Review/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Product;
