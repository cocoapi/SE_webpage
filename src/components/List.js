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
            <Col span={6}>
              <Link to={this.props.data + '/ProductList' + '/supermario'}>
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
              </Link>
            </Col>
        ))}
      </Row>
    );

    return (
      <tr key="a"><td>{CardList(this.state.products)}</td></tr>
    );
  }
}




export default List;
