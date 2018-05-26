import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      consoleName: props.location.state.consoleName,
    };
  }
  render() {
    return (
      <div style={{
 height: '1000px', display: 'flex', flexDirection: 'column', padding: '12px',
}}
      >
        <div style={{ heigth: '100px' }} >
          <p> { this.state.consoleName } </p>
        </div>
        <div style={{ height: '100px' }}>
          <p>
            <Link to={{ pathname: `/${this.state.consoleName}/ProductList`, state: { consoleName: this.state.consoleName } }}> 하드웨어 </Link> /
            <Link to={{ pathname: `/${this.state.consoleName}/ProductList`, state: { consoleName: this.state.consoleName } }}> 타이틀 </Link>
          </p>
        </div>
        this is list for all products
      </div>
    );
  }
}

export default List;
