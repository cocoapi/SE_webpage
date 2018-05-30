import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import List from '../components/List';
import Ads from '../components/Ads'; 
import {Pagination, Row, Col, Radio} from 'antd';
import axios from 'axios';
import PSimg from '../media/resource/PS.gif'
import XBOXimg from '../media/resource/XBOX.gif'
import NINTENDOimg from '../media/resource/NINTENDO.gif'
const RadioGroup = Radio.Group;

const data = [{
  title: 'hihi',
  price: '123123'
},{
  title: 'hohohoho',
  price: '123123'
},{
  title: 'wikiki',
  price: '123123'
}]

class Consoles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      consoleName: props.location.state.consoleName,
      products: null,
      value: 0
    };
    //this.onChange= this.onChange.bind(this);
  }

  onChange = (e) => { // radio onchange
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }

  // onChange = (page, pageSize) => { // page onchange
  //     axios.get('http://localhost:3001/products/all' + page)
  //           .then(res => {
  //             this.setState({
  //               products: res.data
  //             });
  //           });
  // }

  componentDidMount(){
      if(this.state.consoleName === 'PS'){
          axios.get('http://localhost:3001/products/list/PS/title')
              .then(res => {     
                this.setState({products: res.data})
          });
      }

      else if(this.state.consoleName === 'XBOX'){
        axios.get('http://localhost:3001/products/list/XBOX/title')
        .then(res => {
          console.log(res);
          this.setState({products: res.data})
        });
      }

      else if(this.state.consoleName === 'Nintendo'){
          axios.get('http://localhost:3001/products/list/Nintendo/title')
          .then(res => {
            console.log(res);
            this.setState({products: res.data})
          });
      }
    }
  
  render() {
    return (
      this.state.products == null?null:
      <div>
        <Row style={{marginTop:'50px', borderBottom:'1px solid black', paddingBottom:'5px', textAlign:'left'}}>
            <Col span={6}><strong style={{fontSize:'30px'}}>{this.state.consoleName}</strong></Col>
        </Row>
        <Row align='middle' style={{paddingTop:'10px', paddingBottom:'10px', fontSize:'15px', backgroundColor:'WhiteSmoke'}}>
          <Col span={3} offset={9}>
            <Link to={{ pathname: `/${this.state.consoleName}/ProductList`, state: { consoleName: this.state.consoleName, catalog: 'hardware' } }} style={{color:'black'}}> 하드웨어 </Link>
          </Col>
          <Col span={3}>
            <Link to={{ pathname: `/${this.state.consoleName}/ProductList`, state: { consoleName: this.state.consoleName, catalog: 'title' } }} style={{color:'black'}}> 타이틀 </Link>
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

export default Consoles;
