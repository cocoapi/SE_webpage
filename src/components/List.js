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
    const CardList = (data) => (
      <Row gutter={48} style={{marginTop:'40px'}}>
        {data.map((product, index) => (
          <Link to={this.props.data + '/ProductList' + '/supermario'}>
            <Col span={6}>
              <Card 
                hoverable
                style={{ width: '100%' }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
                <Meta
                  title = {product.title}
                  description = {product.price}
                />
              </Card>
            </Col>
          </Link>
        ))}
      </Row>
    );

    return (
        <div>
          {CardList(this.state.products)}
        </div>
    );
  }
}




export default List;
