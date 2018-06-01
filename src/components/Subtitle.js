import React, { Component } from 'react';
import { Row, Col } from 'antd';

const subTitle = {
    borderBottom: '1px solid gray',
    marginBottom: '10px',
    fontSize: '30px',
    paddingBottom: '20px',
    marginTop: '150px',
  };
  
class Subtitle extends Component {
    render() {
      return (
        <Row style={subTitle}>
            <Col span={4}>
                {this.props.title}
            </Col>
        </Row>
      )
    }
  }
  
  export default Subtitle;