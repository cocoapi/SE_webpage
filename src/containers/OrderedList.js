import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Col, Table, Divider, Icon } from 'antd';
import axios from 'axios';
import Subtitle from '../components/Subtitle'


const subTitle = {
    fontSize: '20px',
    paddingBottom: '30px',
    marginTop: '80px',
    fontWeight:'bold',
  };

const columns = [{
    title: '상품명',
    dataIndex: 'name',
    key: 'name',
  },{
    title: '플랫폼',
    dataIndex: 'platform',
    key: 'platform',    
  },{
    title: '수량',
    dataIndex: 'quantity',
    key: 'quantity',    
  }, {
    title: '상품가격',
    dataIndex: 'price',
    key: 'price',
    render: (text, record) => {
        return text.toLocaleString(navigator.language, { minimumFractionDigits: 0 }) + '원'
    }
  }
];

const columns2 = [{
    title: '배송지',
    dataIndex: 'address',
    key: 'address',
  },{
    title: '결제방법',
    dataIndex: 'payment_method',
    key: 'payment_method',    
  },{
    title: '전화번호',
    dataIndex: 'phone',
    key: 'phone',    
  },
];


class OrderedList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          value: '',
          email: props.match.params.userid,
          orderList: []
        };
      }

    componentDidMount(){
        window.scrollTo(0, 0)
        axios.get(`http://mjsong.iptime.org:3001/purchHists/hist/${this.state.email}`)
             .then( res => {

                var prod = [];
                res.data.map( (list, index) => {
                    list.key=index;
                    return list;
                })

                this.setState({orderList:  res.data});
                console.log(this.state.orderList);
             })
             .catch(e => {
                console.log(e);
             })
    }

    render() {
        const list = this.state.orderList.map (list => {
            console.log(list);
            var hi = [];
            hi.push(list);

            hi[0].address = hi[0].address + ' ' + hi[0].address_detail
            return(
            <Row>
                <Col span={16} offset={4}>
                        <div style={subTitle}>{list.purchase_date.slice(0, 10)}</div>
                        <Table columns={columns} dataSource={list.order_list} pagination={false}/>
                        <Table columns={columns2} dataSource={hi} pagination={false}/>
                        <div style={{textAlign:'right', marginTop:'5px'}}>
                            <Icon type='check-circle-o' style={{fontSize:'20px'}}/>
                            <Icon type='close-circle-o' style={{fontSize:'20px'}}/>
                        </div>
                </Col>
            </Row>
        )})

        return (
        <div>
            <Subtitle title='주문 내역'/>
            {list}
        </div>
    )};
}

export default OrderedList;
