import React, { Component } from 'react';
import { Input, Button, Modal } from 'antd';
import { Link } from 'react-router-dom';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Quantity: 0,
    };
  }

  render() {
    return (
      <div style={{
 height: '1000px', display: 'flex', flexDirection: 'row', margin: '4px',
}}
      >
        <div style={{
width: '50%', height: '300px', display: 'flex', flexDirection: 'column', margin: '8px',
}}
        >
          <div style={{ height: '20%' }} />

        </div>
        <div style={{
 width: '50%', height: '300px', display: 'flex', flexDirection: 'column', margin: '8px', textAlign: 'left',
}}
        >
          <p> <br /> 제품명 </p>
          <p> 제조사 </p>
          <p> 가격 </p>
          <Input value={this.state.Quantity} />
          <Link to="/Buy"> 주문하기 </Link>
          <Button onClick={() => {
                Modal.success({ title: '장바구니에 추가되었습니다.', content: '장바구니를 확인하시겠습니까?' });
              }}
          > 장바구니
          </Button>
        </div>
      </div>
    );
  }
}

export default Product;
