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

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      consoleName: props.location.state.consoleName,
      catalog: props.location.state.catalog    
    };
    this.hardwareClicked= this.hardwareClicked.bind(this);
    this.titleClicked= this.titleClicked.bind(this);    
  }

  hardwareClicked = () =>{
    console.log('clicked1');
    this.setState({catalog : "hardware"});
  }

  titleClicked = () =>{
    console.log('clicked2'); 
    this.setState({catalog : "title"});
  } 

  render() {
    return (
      <div>
        <Row style={{marginTop:'50px', borderBottom:'1px solid black', paddingBottom:'5px', textAlign:'left'}}>
            <Col span={6}><strong style={{fontSize:'30px'}}>{this.state.catalog}</strong></Col>
        </Row>

        <Row align='middle' style={{borderTop:'1px solid black', borderBottom: '1px solid black', paddingTop:'10px', paddingBottom:'10px', fontSize:'15px'}}>
          <Col span={3} offset={9}>
            <Link to={{ pathname: `/${this.state.consoleName}/ProductList`}}  onClick={this.hardwareClicked}> 하드웨어 </Link>
          </Col>
          <Col span={3}>
            <Link to={{ pathname: `/${this.state.consoleName}/ProductList`}}  onClick={this.titleClicked}> 타이틀 </Link>
          </Col>
        </Row>     
        <Row>
          {
            this.state.consoleName === 'PS'? <img src={PSimg} style={{width :'100%'}}/> : (this.state.consoleName === 'XBOX'? 
            <img src={XBOXimg} style={{width :'100%'}}/> : <img src={NINTENDOimg} style={{width :'100%'}}/>)
          }
        </Row>    
        <Row>
          <Col span={6} offset={18}>
            <RadioGroup onChange={this.onChange} value={this.state.value}>
              <Radio value={1}>낮은 가격순</Radio>
              <Radio value={2}>높은 가격순</Radio>
              <Radio value={3}>최근 등록순</Radio>
            </RadioGroup>       
          </Col>
        </Row>               
        <List products={this.state.products} />
        <Row style={{marginTop:'50px'}}>
          <Pagination defaultCurrent={1} total={50} onChange={this.onChange}/>
        </Row>  
      </div>
    );
  }
}

export default List;
