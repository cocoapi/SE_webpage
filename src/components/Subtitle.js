import React, { Component } from 'react';
import { Row, Col } from 'antd';

const subTitle = {
   // borderBottom: '1px solid gray',
    fontSize: '25px',
    paddingBottom: '30px',
    marginTop: '80px',
    fontWeight:'bold',
    //textAlign: 'left'
  };
  
class Subtitle extends Component {
    render() {
      return (
        <Row style={subTitle}>
            {/* <Col span={4}> */}
                {this.props.title}
                {this.props.img}
            {/* </Col> */}
        </Row>
      )
    }
  }
  
  export default Subtitle;