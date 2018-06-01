import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Row, Col, Card} from 'antd';
const { Meta } = Card;

class List extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: props.products
    } 
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps);
    this.setState({products: nextProps.products});
  
  }
  
  render() {
    const cardList = 
     this.state.products.map((product, index) => {
       console.log(product.platform);
        return  (
          <Col span={6} style={{padding:'30px'}}>
            <Link to={{pathname: '/' + product.platform + '/ProductList/' + product._id, state: {info: product}}}>
                <Card 
                  hoverable
                  style={{ width: '100%' }}
                  cover={<img alt="example" src={'http://mjsong.iptime.org:3001/products/image/1/' + product._id} />}
                >
                  <Meta
                    title = {product.name}
                    description = {product.price.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}
                  />
                  </Card>
            </Link>
          </Col>
          )
        }
      )

    return (
      <Row gutter={48} style={{marginTop:'40px'}}>
          {cardList}
      </Row>
    );
  }
}

export default List;
