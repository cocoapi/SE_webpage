import React, { Component } from 'react';
import { Table, Button, Input, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateCart, trunkCart } from '../actions'
const { Column } = Table;

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
		dataSource: props.Cart,
    };
  }

  componentDidMount(){
    window.scrollTo(0, 0)
  }
  
  componentWillReceiveProps(nextProps){
	this.setState({dataSource: nextProps.Cart });
  }

  onClickUpMethod = (key) => {
    if (this.state.dataSource[key - 1].quantity >= 99) return;
    this.props.update(key - 1, 1);
	this.setState({dataSource: this.props.Cart })
  }

  onClickDownMethod = (key) => {
    if (this.state.dataSource[key - 1].quantity <= 1) return;
	this.props.update(key - 1, -1);
	this.setState({dataSource: this.props.Cart })
  }

  truncCart = () => {
	this.props.trunc();
  }
  
  render() {
    return (
      <div style={{ height: '1000px', display: 'flex', flexDirection: 'column' }}>
	  <h2 style={{ marginTop: '13px' }}>Shopping Cart</h2>
        <Table
          dataSource={this.state.dataSource}
          pagination={false}
          footer={() => {
            let total = 0;
            this.state.dataSource.forEach(source =>
            total += source.quantity * source.price);
            return <p style={{ textAlign: 'right' }}> 총 구매금액: {total.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}원</p>;
          }}
        >
          <Column
            title="번호"
            dataIndex="key"
            key="key"
          />
          <Column
            title="제품"
            dataIndex="name"
            key="name"
            render={text => (<Link to="/Product"> {text} </Link>)}
          />
          <Column
            title="수량"
            dataIndex="quantity"
            key="quantity"
            width={70}
            render={(text, record) => (
              <div style={{ width: '60px', display: 'flex', flexDirection: 'row' }}>
                <div style={{ width: '40px' }}>
                  <Input size="default" value={text} />
                </div>
                <div style={{
 width: '20px', display: 'flex', flexDirection: 'column', marginLeft: '3px',
}}
                >
                  <a style={{ color: '#505659', height: '12px' }} onClick={() => this.onClickUpMethod(record.key)}><Icon type="caret-up" style={{ fontSize: 12 }} /></a>
                  <a style={{ color: '#505659', height: '12px' }} onClick={() => this.onClickDownMethod(record.key)}><Icon type="caret-down" style={{ fontSize: 12 }} /></a>
                </div>
              </div>
            )}
          />
          <Column
            title="가격"
            dataIndex="price"
            key="price"
            render={(text, record) => {
              const total_price = text * this.state.dataSource[record.key - 1].quantity;
              return <div style={{ width: '100px' }}>{total_price.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}원</div>;
            }}
          />
        </Table>

        <div style={{ marginTop: '8px' }}>
          <Button type="primary" style={{ marginRight: '4px' }} onClick={() => {
			this.props.history.push('/Buy')
		  }}>주문하기</Button>
          <Button style={{ marginRight: '4px' }} onClick={()=>{
			this.props.history.goBack()
		  }}>계속쇼핑하기</Button>
          <Button onClick={() => this.truncCart()}>장바구니 비우기</Button>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
	return{
		Cart: state.Cart.Cart,
	}
}

const mapDispatchtoProps = (dispatch) => {
	return{
		trunc: () => dispatch(trunkCart()),
		update: (key, quantity) => dispatch(updateCart(key, quantity)),
	}
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Cart);
