import React, { Component } from 'react';
import { Table, Button, Input, Icon } from 'antd';
import { Link } from 'react-router-dom';

const dataSource = [{
  key: '1',
  name: 'SuperMario',
  quantity: 2,
  price: 23000,
}, {
  key: '2',
  name: '진삼국무쌍',
  quantity: 2,
  price: 35000,
}];

const columns = [{ 
  title: '번호',
  dataIndex: 'key',
  key: 'key',
}, {
  title: '제품',
  dataIndex: 'name',
  key: 'name',
  render: text => <Link to='/Product'> {text} </Link>
}, {
  title: '수량',
  dataIndex: 'quantity',
  key: 'quantity',
  width: 70,
  render: text => (
    <div style={{width:'60px', display:'flex', flexDirection:'row'}}>
      <div style={{width:'40px'}}>
        <Input size='default' defaultValue={text} />
      </div>
      <div style={{width:'20px', display:'flex', flexDirection: 'column'}}>
        <a style={{color: '#505659'}} onClick={onClickMethod} ><Icon type="caret-up" /></a>
        <Icon type="caret-down" />
      </div>
    </div>
  )
}, {
  title: '가격',
  dataIndex: 'price',
  key: 'price',
  render: text => <div>{text}원</div>
},
];

const onClickMethod = () =>(
  console.log('clicked!')
)

class Cart extends Component {
  constructor(props){
    super(props);
    this.state = {
      quantitys: [],
    }
  }
  render() {
    return (
      <div style={{height:'1000px', display:'flex', flexDirection:'column'}}>
        <h2 style={{marginTop:'13px'}}>Shopping Cart</h2>
        <Table 
          dataSource={dataSource} 
          pagination={false} 
          columns={columns} 
          footer={() =><p style={{textAlign:'right'}}>총 구매금액: 
          {' ' + (dataSource[0].price * dataSource[0].quantity + dataSource[1].price * dataSource[1].quantity)}원</p>}/>
        <div style={{marginTop:'8px'}}>
          <Button type='primary' style={{marginRight:'4px'}}>주문하기</Button>
          <Button style={{marginRight:'4px'}}>계속쇼핑하기</Button>
          <Button>장바구니 비우기</Button>
        </div>
	    </div>
    );
  }
}

export default Cart;
