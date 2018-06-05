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
      value: '',
      products: []
    };
  }

  componentDidMount(){
      axios.get(`http://mjsong.iptime.org:3001/products/list/${this.props.consoleName}/${this.props.catalog.toLowerCase()}/1`)
        .then((res) => {
          console.log(res);
          this.setState({ products: res.data });
        })
        .catch((error) => {
          console.log(error);
        });
  }

  componentWillReceiveProps(nextProps){
      axios.get(`http://mjsong.iptime.org:3001/products/list/${nextProps.consoleName}/${nextProps.catalog.toLowerCase()}/1`)
      .then((res) => {
        console.log(res);
        this.setState({ products: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  currentPage = (page) => {
    return page;
  }
 
  onChangeRadio = (e) => { // radio onchange
    console.log('radio checked', e.target.value);
      this.setState({
        value: e.target.value,
      });
      this.currentPage(1);
      this.onChangePage(1);
  }

  onChangePage = (page, pageSize) => {
            
            axios.get(`http://mjsong.iptime.org:3001/products/list/${this.props.consoleName}/${this.props.catalog.toLowerCase()}/${page}`+this.state.value)
            .then((res) => {
              console.log(res);
              this.setState({ products: res.data });
            })
            .catch((error) => {
              console.log(error);
            });       
    }
  
  render() {
    console.log(this.state.products);
    return (
      <div>
        <Row>
          <Col span={6} offset={18}>
            <RadioGroup onChange={this.onChangeRadio} value={this.state.value}>
              <Radio value='/price/-1'>낮은 가격순</Radio>
              <Radio value='/price/1'>높은 가격순</Radio>
              <Radio value='/release_date/-1'>최근 등록순</Radio>
            </RadioGroup>       
          </Col>
        </Row>               
        {
          this.state.products.length === 0 ? 
          <Row> 상품이 없습니다 </Row> :
          <List products={this.state.products} />
        }
        <Row style={{marginTop:'50px'}}>
          <Pagination defaultCurrent={1} current={this.currentPage} total={50} onChange={this.onChangePage}/>
        </Row>  
      </div>
    );
  }
}

export default LargeList;
