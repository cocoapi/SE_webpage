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
      products: [],
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
    axios.get(`http://mjsong.iptime.org:3001/products/list/${this.state.consoleName}/title`)
      .then((res) => {
        console.log(res.data);
        this.setState({ products: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Row style={{
marginTop: '50px', borderBottom: '1px solid black', paddingBottom: '5px', textAlign: 'left',
}}
        >
          <Col span={6}><strong style={{ fontSize: '30px' }}>{this.state.catalog === undefined ? this.state.consoleName : this.state.catalog }</strong></Col>
        </Row>
        <Row
          align="middle"
          style={{
  paddingTop: '10px', paddingBottom: '10px', fontSize: '15px', backgroundColor: 'WhiteSmoke',
}}
        >
          <Col span={3} offset={9}>
            <Link to={{ pathname: `/${this.state.consoleName}/ProductList`, state: { consoleName: this.state.consoleName, catalog: 'Hardware' } }} style={{ color: 'black' }}> 하드웨어 </Link>
          </Col>
          <Col span={3}>
            <Link to={{ pathname: `/${this.state.consoleName}/ProductList`, state: { consoleName: this.state.consoleName, catalog: 'Title' } }} style={{ color: 'black' }}> 타이틀 </Link>
          </Col>
        </Row>
        <Row>
          {
            <img src={this.state.consoleImg} style={{ width: '100%' }} alt="consoleImage" />
          }
        </Row>
        {
            this.state.catalog === undefined ?
              <List products={this.state.products} /> :
              <LargeList />
          }
      </div>
    );
  }
}

export default Consoles;
