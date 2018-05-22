import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import List from '../components/List';
import Ads from '../components/Ads';

class Consoles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      consoleName: props.location.state.consoleName,
    };
  }
  render() {
    return (
      <div style={{ height: '1000px', display: 'flex', flexDirection: 'column' }}>
        <div>
          <p> { this.state.consoleName } </p>
        </div>
        <div>
          <p>
            <Link to={{ pathname: '/ProductList', state: { consoleName: this.state.consoleName } }}> 하드웨어 </Link> /
            <Link to={{ pathname: '/ProductList', state: { consoleName: this.state.consoleName } }}> 타이틀 </Link>
          </p>
        </div>
        <Ads />
        <List data={this.state.consoleName} />
        <List />
      </div>
    );
  }
}

export default Consoles;
