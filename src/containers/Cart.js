import React, { Component } from 'react';
import { Table, Button, Input, Icon } from 'antd';
import { Link } from 'react-router-dom';

const { Column } = Table;

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
  constructor(props) {
    super(props);
    this.state = {
      dataSource,
    };
    this.onClickUpMethod = this.onClickUpMethod.bind(this);
    this.onClickDownMethod = this.onClickDownMethod.bind(this);
  }

  onClickUpMethod(key) {
    if (dataSource[key - 1].quantity >= 99) return;

    dataSource[key - 1].quantity + 1;
    this.setState({ dataSource });
  }

  onClickDownMethod(key) {
    if (dataSource[key - 1].quantity <= 1) return;

    dataSource[key - 1].quantity--;
    this.setState({ dataSource });
  }

  truncCart() {
    this.setState({ dataSource: [] });
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
          <Button type="primary" href="/buy" style={{ marginRight: '4px' }}>주문하기</Button>
          <Button style={{ marginRight: '4px' }}>계속쇼핑하기</Button>
          <Button onClick={() => this.truncCart()}>장바구니 비우기</Button>
        </div>
      </div>
    );
  }
}

export default Cart;
