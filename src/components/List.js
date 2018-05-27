import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Row, Col, Card} from 'antd';
const { Meta } = Card;

class List extends Component {
  constructor(props){
    super(props);
    this.state = {
      productss: this.props.productss
    } 
  }

  render() {
    return (
      <Row gutter={48} style={{marginTop:'40px'}}>{
          this.state.productss.map((product, index) => {
            {
              console.log(product._id);
              
             }
          return  (
            <Col span={6}>
              <Link to={product.platform + '/ProductList' + '/supermario'}>
                  <Card 
                    hoverable
                    style={{ width: '100%' }}
                    cover={<img alt="example" src={'http://localhost:3001/products/image/1/'.concat(product._id)} />}
                  >
                    <Meta
                      title = {product.name}
                      description = {product.price}
                    />
                    </Card>
              </Link>
            </Col>)
            }
        )}
      </Row>
    );
  }
}




export default List;
