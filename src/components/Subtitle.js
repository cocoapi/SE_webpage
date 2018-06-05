import React, { Component } from 'react';
import { Row, Col } from 'antd';

const subTitle = {
    fontSize: '25px',
    paddingBottom: '30px',
    marginTop: '80px',
    fontWeight:'bold',
  };
  
class Subtitle extends Component {
    render() {
      return (
        <Row style={subTitle}>
                {this.props.title}
                {this.props.img}
        </Row>
      )
    }
  }
  
  export default Subtitle;