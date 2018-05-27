import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import List from '../components/List';
import Ads from '../components/Ads';

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
  }
  render() {
    return (
      <div>
          <p> { this.state.consoleName } </p>
          <p>
            <Link to={{ pathname: `/${this.state.consoleName}/ProductList`, state: { consoleName: this.state.consoleName } }}> 하드웨어 </Link> /
            <Link to={{ pathname: `/${this.state.consoleName}/ProductList`, state: { consoleName: this.state.consoleName } }}> 타이틀 </Link>
          </p>
        <Ads />
        <List products={data} />
      </div>
    );
  }
}

export default Consoles;
