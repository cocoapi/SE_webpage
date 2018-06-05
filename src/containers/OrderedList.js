import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Col, Table, Divider } from 'antd';
import axios from 'axios';
import Subtitle from '../components/Subtitle'

const columns = [{
    title: '상품명',
    dataIndex: 'name',
    key: 'name',
  },{
    title: '배송지',
    dataIndex: 'address',
    key: 'address',
  }, {
    title: '수량',
    dataIndex: 'amount',
    key: 'amount',    
  }, {
    title: '주문일',
    dataIndex: 'purchase_date',
    key: 'purchase_date',
  }, {
    title: '결제수단',
    dataIndex: 'payment_method',
    key: 'payment_method',
  }, {
}];


class OrderedList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          value: '',
          email: props.match.params.userId,
          orderList: []
        };
      }

    componentWillMount(){
        window.scrollTo(0, 0)
        axios.get('http://mjsong.iptime.org:3000/purchHists/hist/${this.state.email}')
             .then( res => {
                console.log(res);

                res.data.order_list.map( (list, index) => {
                    list.payment_method = res.data.payment_method
                    list.purchase_date = res.data.purchase_date
                    list.address = res.data.address + ' ' + res.data.address_detail

                    return list
                })

                this.setState({orderList: res.data.order_list});
             })
             .catch(e => {
                console.log(e);
             })
    }

    render() {
        return (
        <div>
            <Subtitle title='주문 내역'/>
            <Row>
                <Col span={20} offset={2}>
                    <Table columns={columns} dataSource={this.state.orderList}/>
                </Col>
            </Row>
        </div>
    )};
}

export default OrderedList;
