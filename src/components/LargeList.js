import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Radio, Pagination } from 'antd';
import List from '../components/List';
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
      value: 0,
      products: []
    };
  }

  componentDidMount(){
      axios.get(`http://localhost:3001/products/${this.props.consoleName}/${this.props.catalog}/1`)
        .then((res) => {
          console.log(res);
          this.setState({ products: res.data });
        })
        .catch((error) => {
          console.log(error);
        });
  }

  onChangeRadio = (e) => { // radio onchange
    console.log('radio checked', e.target.value);
    if(e.target.value === 1){
      this.setState({
        value: e.target.value,
      });
    }
  }

  onChangePage = (page, pageSize) => {
      switch(Number(this.state.value)){ // radio check 어디에?
        case 0: //radie check 안함
            axios.get(`http://localhost:3001/products/${this.props.consoleName}/${this.props.catalog}/${page}`)
            .then((res) => {
              console.log(res);
              this.setState({ products: res.data });
            })
            .catch((error) => {
              console.log(error);
            });       
        case 1: // 낮은 가격순
            axios.get(`http://localhost:3001/products/${this.props.consoleName}/${this.props.catalog}/${page}/price/1`)
            .then((res) => {
              console.log(res);
              this.setState({ products: res.data });
            })
            .catch((error) => {
              console.log(error);
            });
        case 2: // 높은 가격순
            axios.get(`http://localhost:3001/products/${this.props.consoleName}/${this.props.catalog}/${page}/price/-1`)
            .then((res) => {
              console.log(res);
              this.setState({ products: res.data });
            })
            .catch((error) => {
              console.log(error);
            });
        case 3: // 최근 등록순
            axios.get(`http://localhost:3001/products/${this.props.consoleName}/${this.props.catalog}/${page}/release_date/-1`)
            .then((res) => {
              console.log(res);
              this.setState({ products: res.data });
            })
            .catch((error) => {
              console.log(error);
            });
    }
  }

  render() {
    return (
      <div>
        <Row>
          <Col span={6} offset={18}>
            <RadioGroup onChange={this.onChangeRadio} value={this.state.value}>
              <Radio value={1}>낮은 가격순</Radio>
              <Radio value={2}>높은 가격순</Radio>
              <Radio value={3}>최근 등록순</Radio>
            </RadioGroup>       
          </Col>
        </Row>               
        <List products={this.state.products} />
        <Row style={{marginTop:'50px'}}>
          <Pagination defaultCurrent={1} total={50} onChange={this.onChangePage}/>
        </Row>  
      </div>
    );
  }
}

export default LargeList;
