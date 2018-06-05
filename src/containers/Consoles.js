import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Pagination, Row, Col, Radio } from 'antd';
import axios from 'axios';
import List from '../components/List';
import LargeList from '../components/LargeList';
import Ads from '../components/Ads';
import PSimg from '../media/resource/PS.gif';
import XBOXimg from '../media/resource/XBOX.gif';
import NINTENDOimg from '../media/resource/NINTENDO.gif';
import Subtitle from '../components/Subtitle';

const RadioGroup = Radio.Group;

const data = [{
  title: 'hihi',
  price: '123123',
}, {
  title: 'hohohoho',
  price: '123123',
}, {
  title: 'wikiki',
  price: '123123',
}];

class Consoles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      consoleName: props.location.state.consoleName,
      catalog: props.location.state.catalog,
      consoleImg: this.props.location.state.consoleName === 'PlayStation' ? PSimg : this.props.location.state.consoleName === 'XBOX' ? XBOXimg : NINTENDOimg,
      newProducts: [],
      bestProducts: []
    };
    // this.onChange= this.onChange.bind(this);
  }

  // onChange = (page, pageSize) => { // page onchange
  //     axios.get('http://localhost:3001/products/all' + page)
  //           .then(res => {
  //             this.setState({
  //               products: res.data
  //             });
  //           });
  // }

  componentDidMount() {
    window.scrollTo(0, 0)
    if(this.state.catalog == undefined){
      axios.get(`http://mjsong.iptime.org:3001/products/list/${this.state.consoleName}/all/1/release_date/-1`) // 특정 catalog에 대해 발매일에 대해 내림차순
        .then((res) => {
          console.log(res.data);
          var datas = res.data.slice(0, 4);
          this.setState({ newProducts: datas });
        })
        .catch((error) => {
          console.log(error);
        });

        axios.get(`http://mjsong.iptime.org:3001/products/list/${this.state.consoleName}/all/1/total_sell/-1`) // 특정 platform에 대해 판매량에 대해 내림차순
        .then((res) => {
          console.log(res.data);
          var datas = res.data.slice(0, 4);
          this.setState({ bestProducts: datas });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      catalog: nextProps.location.state.catalog,
      consoleName: nextProps.location.state.consoleName
    })
  }

  render() {
    return (
      <div>
        <Row style={{marginTop: '50px', paddingBottom: '5px', textAlign: 'left'}}>
          <Col span={4}><strong style={{ fontSize: '30px' }}>{this.state.catalog === undefined ? this.state.consoleName : this.state.catalog }</strong></Col>
        </Row>
        <Row
          align="middle"
          style={{paddingTop: '10px', paddingBottom: '10px', fontSize: '15px', backgroundColor: 'whiteSmoke'}}
        >
          <Col span={3} offset={9}>
            <Link to={{ pathname: `/${this.state.consoleName}/ProductList`, state: { consoleName: this.state.consoleName, catalog: 'Hardware' } }} style={{ color: 'black'}}> 하드웨어 </Link>
          </Col>
          <Col span={3}>
            <Link to={{ pathname: `/${this.state.consoleName}/ProductList`, state: { consoleName: this.state.consoleName, catalog: 'Title' } }} style={{ color: 'black'}}> 타이틀 </Link>
          </Col>
        </Row>
        <Row>
          {
            <img src={this.state.consoleImg} style={{ width: '100%' }} alt="consoleImage" />
          }
        </Row>
        {
            this.state.catalog === undefined ?
              <div>
              <Subtitle title='New Products'/>
              <List products={this.state.newProducts} /> 
              <Subtitle title='Best Products'/>
              <List products={this.state.bestProducts} />
              </div>
              :
              <LargeList catalog={this.state.catalog} consoleName={this.state.consoleName}/>
          }
      </div>
    );
  }
}

export default Consoles;
