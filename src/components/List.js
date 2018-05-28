import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Row, Col, Card} from 'antd';
const { Meta } = Card;

class List extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: this.props.products
    } 
  }

  render() {
    const cardList = 
     this.state.products.map((product, index) => {
        return  (
          <Col span={6}>
            <Link to={product.platform + '/ProductList/' + product._id}>
                <Card 
                  hoverable
                  style={{ width: '100%' }}
                  cover={<img alt="example" src={'http://localhost:3001/products/image/1/'.concat(product._id)} />}
                >
                  <Meta
                    title = {product.name}
                    description = {product.price.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}
                  />
                  </Card>
            </Link>
          </Col>)
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
