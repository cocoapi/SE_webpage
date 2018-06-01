import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import axios from 'axios';


class OrderedList extends React.Component {
    render() {
        return (
            <Row>
                <Col span={20} offset={2}>
                    <Row style={{marginTop:'60px', marginBottom:'30px', borderBottom:'1px solid black', paddingBottom:'5px', textAlign:'left'}}>
                        <Col span={6}><strong style={{fontSize:'30px'}}>주문내역</strong></Col>
                    </Row>
                    <Col span={20} offset={2}>
                        <Row style={{paddingTop:'10px', paddingBottom:'10px', borderTop:'1px solid black', borderBottom:'1px solid black', backgroundColor:'WhiteSmoke'}}>
                           <Col span={5} style={{fontSize:'20px', fontWeight: 'bold'}}>
                                2018.03.22
                            </Col>
                        </Row>
                        <Row style={{borderTop:'1px solid black', borderBottom:'1px solid black', padding:'20px'}}>
                            <Col span={4} style={{border: '1px solid black'}}>
                                <div style={{height:'130px'}}/>
                            </Col>
                            <Col span={18}>
                                <Row style={{fontSize:'20px', fontWeight: 'bold'}}>슈퍼마리오</Row>
                                <Row style={{fontSize:'15px', paddingTop: '10px'}}> 1개 </Row>
                                <Row style={{fontSize:'15px', paddingTop: '10px'}}> 239,000원 </Row>
                                <Row style={{fontSize:'15px', textAlign:'right', fontWeight:'bold', paddingTop:'10px'}}> 배송완료 </Row>
                            </Col>
                        </Row>
                    </Col>
                </Col>
            </Row>            
    )};
}


export default OrderedList;