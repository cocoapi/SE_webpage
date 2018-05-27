import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import List from '../components/List';
import Ads from '../components/Ads'; 
import {Pagination, Row, Col} from 'antd';
import axios from 'axios';

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
      productsss: null
    };
    //this.onChange= this.onChange.bind(this);
  }

  componentDidMount(){
      if(this.state.consoleName === 'PS'){
          axios.get('http://localhost:3001/products/list/PS/title')
              .then(res => {
                
                this.setState({productsss: res.data})
          });
      }

      else if(this.state.consoleName === 'XBOX'){
        axios.get('http://localhost:3001/products/list/XBOX/title')
        .then(res => {
          console.log(res);
          this.setState({productsss: res.data})
        });
      }

      else if(this.state.consoleName === 'Nintendo'){
          axios.get('http://localhost:3001/products/list/Nintendo/title')
          .then(res => {
            console.log(res);
            this.setState({productsss: res.data})
          });
      }
    }

  // onChange = (page, pageSize) => {
  //     axios.get('http://localhost:3001')h
  //           .then(res => {
              
  //           });
  // }
  
  render() {
    return (
      this.state.productsss == null?null:
      <div>
          <p> { this.state.consoleName } </p>
          <p>
            <Link to={{ pathname: `/${this.state.consoleName}/ProductList`, state: { consoleName: this.state.consoleName, catalog: 'hardware' } }}> 하드웨어 </Link> /
            <Link to={{ pathname: `/${this.state.consoleName}/ProductList`, state: { consoleName: this.state.consoleName, catalog: 'title' } }}> 타이틀 </Link>
          </p>
        <Ads />
        <List productss={this.state.productsss} />
        <Row style={{marginTop:'50px'}}>
          <Pagination defaultCurrent={1} total={50} onChange={this.onChange}/>
        </Row>  
      </div> 
    );
  }
}

export default Consoles;
