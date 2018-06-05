import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {Row, Col, Card, Avatar, Icon} from 'antd';
import axios from 'axios';
import UpdateProductModal from '../components/UpdateProductModal'
const { Meta } = Card;

class List extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: props.user,
      products: props.products
    } 
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps);
    this.setState({products: nextProps.products});
  
  }

  onClickDelete = (id, e) => {
    e.preventDefault();
    console.log(id);

    axios.delete(`http://mjsong.iptime.org:3001/products/product/${id}`)
          .then((res) => {
            console.log(res);

            var prodRemoved = this.state.products.filter( (element) => {
              return element._id !== id
            })
        
            this.setState({products: prodRemoved})
          })
          .catch((e) => {
            console.log(e);
          })
  }

  modalOnClick = (e) => {
    e.preventDefault();
  }
  // onClickUpdate = (id, e) => {
  //   e.preventDefault();
  //   console.log(id);
  //   return <AddProductModal/>
  // }
  
  
  render() {
    const cardList = 
     this.state.products.map((product, index) => {
       console.log(product.platform);
        return  (
          <Col span={6} style={{padding:'30px'}}>
            <Link to={{pathname: '/' + product.platform + '/ProductList/' + product._id, state: {info: product}}}>
                <Card 
                  hoverable
                  bordered = {false}
                  style={{ width: '100%' }}
                  cover={<img alt="example" src={'http://mjsong.iptime.org:3001/products/image/1/' + product._id} />}
                  actions={ this.state.user.logged_in == false ? null : (this.state.user.user.role === true ?
                    [<div onClick={(e) => this.modalOnClick(e)}><UpdateProductModal product={product}/></div>,<Icon type='close' onClick={(e) => this.onClickDelete(product._id, e)}/>] : false)
                  } // 관리자권한 일 때만 
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
      <Row gutter={48} style={{marginTop:'20px', backgroundColor:'whiteSmoke'}}>
        <Col span={22} offset={1}>
          {cardList}
        </Col>
      </Row>
    );
  }
}


const mapStateToProps = (state) => {
	return {
		user: state.currentUser,
	}
}

export default connect(mapStateToProps)(List);

