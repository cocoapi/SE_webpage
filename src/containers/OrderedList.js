import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Col, Table, Divider } from 'antd';
import axios from 'axios';

const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="javascript:;">{text}</a>,
  },{
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  }, {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <a href="javascript:;">주문내역</a>
        <Divider type="vertical" />
        <a href="javascript:;">Delete</a>
        <Divider type="vertical" />
      </span>
    ),
  }];

class OrderedList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          value: '',
          products: props.Cart,
          user: props.user
        };
      }

    render() {
        return (
            <Table columns={columns} dataSource={this.state.products}/>
    )};
}

const mapStatetoProps = (state) => {
    return{
        user: state.currentUser.user,
        Cart: state.Cart.Cart
    }
}


export default connect(mapStatetoProps)(OrderedList);