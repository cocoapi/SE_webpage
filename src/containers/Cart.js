import React, { Component } from 'react';
import { Table, Button, Input, Icon } from 'antd';
import { Link } from 'react-router-dom';
const { Column }  = Table;

const dataSource = [{
  key: '1',
  name: 'SuperMario',
  quantity: 1,
  price: 23000,
}, {
  key: '2',
  name: '진삼국무쌍',
  quantity: 1,
  price: 35000,
}];

class Cart extends Component {
  constructor(props){
    super(props);
    this.state = {
      dataSource : {dataSource}
    }
   this.onClickUpMethod = this.onClickUpMethod.bind(this);
   this.onClickDownMethod = this.onClickDownMethod.bind(this);
  }

  onClickUpMethod(key) {
    if(dataSource[key-1].quantity>=9) return;

    dataSource[key-1].quantity++
    this.setState({dataSource : {dataSource}})
  }

  onClickDownMethod(key) {
    if(dataSource[key-1].quantity<=1) return;

    dataSource[key-1].quantity--
    this.setState({dataSource : {dataSource}})
  }

  render() {
    return (
      <div style={{height:'1000px', display:'flex', flexDirection:'column', marginRight:'50px', marginLeft:'50px'}}>
        <h2 style={{marginTop:'13px'}}>Shopping Cart</h2>
        <Table 
          dataSource={this.state.dataSource.dataSource} 
          pagination={false}  
          footer= {() => { 
            let total = 0
            dataSource.forEach((source) =>
            total += source.quantity * source.price)

            return <p style={{textAlign:'right'}}> 총 구매금액: {total.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}원</p>
          }}
        > 
          <Column
            title= '번호'
            dataIndex= 'key'
            key= 'key'
          />
          <Column
            title= '제품'
            dataIndex= 'name'
            key= 'name'
            render= {(text) => (<Link to='/Product'> {text} </Link>)}
          />
          <Column
            title= '수량'
            dataIndex= 'quantity'
            key= 'quantity'
            width= {70}
            render= {(text, record) => (
              <div style={{width:'60px', display:'flex', flexDirection:'row'}}>
                <div style={{width:'40px'}}>
                  <Input size='default' value={text} readOnly/>
                </div>
                <div style={{width:'20px', display:'flex', flexDirection: 'column', marginLeft: '3px'}}>
                  <a style={{color: '#505659', height: '12px'}} onClick={()=>this.onClickUpMethod(record.key)}><Icon type="caret-up" style={{fontSize: 12}}/></a>
                  <a style={{color: '#505659', height: '12px'}} onClick={()=>this.onClickDownMethod(record.key)}><Icon type="caret-down" style={{fontSize: 12}}/></a>
                </div>
              </div>
            )}
          />
          <Column
            title= '가격'
            dataIndex= 'price'
            key= 'price'
            render= {(text, record) => {
              let total_price = text * this.state.dataSource.dataSource[record.key-1].quantity
              return <div>{total_price.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}원</div>
            }}
          />
        </Table>
        
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
