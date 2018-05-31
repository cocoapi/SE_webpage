import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Radio, Pagination } from 'antd';
import PSimg from '../media/resource/PS.gif'
import XBOXimg from '../media/resource/XBOX.gif'
import NINTENDOimg from '../media/resource/NINTENDO.gif'
import axios from 'axios';
const RadioGroup = Radio.Group;

const subTitle = {
  borderBottom: "1px solid gray", 
  marginBottom: "10px", 
  fontSize: '20px', 
  paddingBottom:'20px',
  marginTop:'150px'
}

class LargeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  onChange = (e) => { // radio onchange
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <Row>
          <Col span={6} offset={18}>
            <RadioGroup onChange={this.onChange} value={this.state.value}>
              <Radio value={1}>낮은 가격순</Radio>
              <Radio value={2}>높은 가격순</Radio>
              <Radio value={3}>최근 등록순</Radio>
            </RadioGroup>       
          </Col>
        </Row>               
        {/* <List products={this.state.products} /> */}
        <Row style={{marginTop:'50px'}}>
          <Pagination defaultCurrent={1} total={50} onChange={this.onChange}/>
        </Row>  
      </div>
    );
  }
}

export default LargeList;
