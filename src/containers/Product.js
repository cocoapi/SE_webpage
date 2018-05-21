import React, { Component } from 'react';
import { Input, Button, Modal, Row, Col } from 'antd';
import { Link } from 'react-router-dom';

const dataSource ={
  productName: 'PS4 히트맨 DEFINITIVE EDITION',
  company: 'IO INTERACTIVE',
  price: '62,000원'
}

class Product extends Component {
  constructor(props){
    super(props);
    this.state = {
      Quantity: 0,
    }
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
          <Col span={8} style={{border:'1px solid lightblack', padding: '25px'}}>
            <h2> {dataSource.productName} </h2>
            
            <div style={{marginTop:'30%', fontSize:'20px'}}> 제조사: {dataSource.company} </div>
           
            <div style={{marginTop:'40%', fontSize:'20px'}}> 가격: {dataSource.price} </div>
            <div style={{position:'absolute', bottom:'10px', left:'0', right:'0', marginLeft:'auto', marginRight:'auto'}}>
              <Button icon='credit-card' size='large' href='buy'style={{marginRight:'10px'}}> 주문하기 </Button>
              <Button icon='shopping-cart' size='large' onClick={() => {
                Modal.success({ title:"장바구니에 추가되었습니다.", content: "장바구니를 확인하시겠습니까?",});
              }}> 장바구니 </Button>
            </div>
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
      </div>
    );
  }
}

export default Product;
