import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col } from 'antd';

const subTitle = {
  borderBottom: "1px solid gray", 
  marginBottom: "10px", 
  fontSize: '20px', 
  paddingBottom:'20px',
  marginTop:'150px'
}

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      consoleName: props.location.state.consoleName,
      catalog: props.location.state.catalog    
    };
    this.hardwareClicked= this.hardwareClicked.bind(this);
    this.titleClicked= this.titleClicked.bind(this);    
  }

  hardwareClicked = () =>{
    console.log('clicked1');
    this.setState({catalog : "hardware"});
  }

  titleClicked = () =>{
    console.log('clicked2'); 
    this.setState({catalog : "title"});
  } 

  render() {
    return (
      <div>
        <p> { this.state.consoleName } </p>
        <p>
          <Link to={{ pathname: `/${this.state.consoleName}/ProductList`}}  onClick={this.hardwareClicked}> 하드웨어 </Link> /
          <Link to={{ pathname: `/${this.state.consoleName}/ProductList`}}  onClick={this.titleClicked}> 타이틀 </Link>
        </p>
        <Row style={subTitle}>
            <Col span={4}>
              {this.state.catalog}
            </Col>
        </Row>
      </div>
    );
  }
}

export default List;
