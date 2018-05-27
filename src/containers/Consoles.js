import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import List from '../components/List';
import Ads from '../components/Ads'; 
import {Pagination, Row, Col} from 'antd';

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
    };
    this.onChange= this.onChange.bind(this);
  }

  onChange = (page, pageSize) => {
    console.log(page);
    console.log(pageSize);
  }
  
  render() {
    return (
      <div>
          <p> { this.state.consoleName } </p>
          <p>
            <Link to={{ pathname: `/${this.state.consoleName}/ProductList`, state: { consoleName: this.state.consoleName, catalog: 'hardware' } }}> 하드웨어 </Link> /
            <Link to={{ pathname: `/${this.state.consoleName}/ProductList`, state: { consoleName: this.state.consoleName, catalog: 'title' } }}> 타이틀 </Link>
          </p>
        <Ads />
        <List products={data} />
        <Row style={{marginTop:'50px'}}>
          <Pagination defaultCurrent={1} total={50} onChange={this.onChange}/>
        </Row>  
      </div>
    );
  }
}

export default Consoles;
