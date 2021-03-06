import React, { Component } from 'react';
import { Button, Modal, Row, Col, InputNumber } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import axios from 'axios';
import { addCart } from '../actions'
import Review from '../components/Review';
import ReviewModal from '../components/ReviewModal';
import Subtitle from '../components/Subtitle';

const subTitle = {
  borderBottom: "1px solid gray", 
  marginBottom: "10px", 
  fontSize: '20px', 
  paddingBottom:'20px',
  marginTop:'150px'
}

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Quantity: 1,
	    modalVisible: false,
      product_id: props.match.params.ProductId,
      info: props.location.state.info,
      reviews: []
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0)

    axios.get(`http://mjsong.iptime.org:3001/products/review/${this.state.product_id}`)
    .then(res => {
      this.setState({reviews: res.data})
    })
    .catch(e => {
      console.log(e)
    })
  }

  onChange = (value) =>{
    console.log('changed', value);
  }

  reviewAdded = () => {
    axios.get(`http://mjsong.iptime.org:3001/products/review/${this.state.product_id}`)
          .then(res => {
            console.log(res)
            this.setState({reviews: res.data})
          })
          .catch(e => {
            console.log(e)
          })
  }

  reviewOnclick = () => {

  }

  render() {
    return (
      <div>
        <Row>
        <Col span={20} offset={2}>
          <Row type="flex" justify="space-around" style={{marginTop: '100px', marginBottom: '50px', paddingBottom: '35px', paddingTop: '35px', borderTop: '1px solid black', borderBottom: '1px solid black', backgroundColor: 'white'}}>
            <Col span={8}>
               <img src = {'http://mjsong.iptime.org:3001/products/image/1/' + this.state.product_id} style={{height : '450px'}}/>
            </Col>
            <Col span={8}>
              <Row>
                <h1 style={{borderBottom:'1px solid black', paddingBottom:'5px'}}> {this.state.info.name} </h1>
              </Row>
              <Row>
                제조사: {this.state.info.provider}
              </Row>
              <Row style={{marginTop:'40px', fontSize:'20px'}}>
                출시일: {this.state.info.release_date.slice(0, 10)}
              </Row>
              <Row style={{marginTop:'100px', fontSize:'20px'}}>
                가격: {this.state.info.price.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}원
              </Row>
              <Row style={{marginTop:'40px', fontSize:'20px'}}>
                수량:  <InputNumber min={1} max={99} defaultValue={1} size='medium' onChange={(value) => {this.setState({Quantity: value})}}/>
              </Row>
              <Row style={{marginTop:'60px'}}>
                  <Button icon='credit-card' size='large' style={{marginRight:'10px'}}
                    onClick={()=>{
						this.props.addCart({...this.state.info, quantity: this.state.Quantity});
						this.props.history.push('/Buy')
					}}> 주문하기 </Button>
                          <Button icon='shopping-cart' size='large' onClick={() => {
							  this.props.addCart({...this.state.info, quantity: this.state.Quantity});
                    if(this.props.user.email !== undefined){
						console.log(this.props.Cart)
							  axios.patch('http://mjsong.iptime.org:3001/carts/'+this.props.user.email,{
									  email:this.props.user.email,
								order_list: this.props.Cart,
							})
							  .then(r =>{
							  })
							  .catch(e =>{
							  })
					}
							  this.setState({modalVisible: true})
                          }}> 장바구니 </Button>
                    <Modal
                      title='장바구니에 추가되었습니다.'
                      visible={this.state.modalVisible}
                      onOk={()=>{this.props.history.push('/Shopping_Cart')}}
                      onCancel={()=>{this.setState({modalVisible: false})}}
                              >
                    장바구니를 확인하시겠습니까?
                    </Modal>
              </Row>
            </Col>
          </Row>
      
            {/* <Col span={6}> */}
              <Subtitle title='Product Detail' img={<img src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAADdCAYAAABUpawjAAAHBUlEQVR4Xu3cMW5bQRBEwc+T2zy5HNAwAUUE0U150eVYHv2tWTxspNt1Xb+v6/p1+UeAwJrA/SYAazt3XgL/BATAZSAwLCAAw8t3dAIC4A4QGBYQgOHlOzoBAXAHCAwLCMDw8h2dgAC4AwSGBQRgePmOTkAA3AECwwICMLx8RycgAO4AgWEBARhevqMTEAB3gMCwgAAML9/RCQiAO0BgWCAWgPvfvyswbOnoBD4qkPhDPgLw0ZX5ZQRyAgKQszSJwHECAnDcynwwgZyAAOQsTSJwnIAAHLcyH0wgJyAAOUuTCBwnIADHrcwHE8gJCEDO0iQCxwkIwHEr88EEcgICkLM0icBxAgJw3Mp8MIGcgADkLE0icJyAABy3Mh9MICcgADlLkwgcJyAAx63MBxPICQhAztIkAscJCMBxK/PBBHICApCzNInAcQICcNzKfDCBnIAA5CxNInCcgAActzIfTCAnIAA5S5MIHCcgAMetzAcTyAkIQM7SJALHCQjAcSvzwQRyAgKQszSJwHECAnDcynwwgZyAAOQsTSJwnIAAHLcyH0wgJyAAOUuTCBwnIADHrcwHE8gJCEDO0iQCxwkIwHEr88EEcgKTAfjK+ZlEoCZwq01+DhaADyD7FQTeERCAd9Re+D9eAC8g+ZEfFxCA0goEoARrbFRAAKKcz2ECUII1NiogAFFOAShxGlsSEIASrBdACdbYqIAARDm9AEqcxpYEBKAE6wVQgjU2KiAAUU4vgBKnsSUBASjBegGUYI2NCghAlNMLoMRpbElAAEqwXgAlWGOjAgIQ5fQCKHEaWxIQgBKsF0AJ1tiogABEOb0ASpzGlgQEoATrBVCCNTYqIABRTsMIEPguMPkHQVwDAgQeAgLgJhAYFhCA4eU7OgEBcAcIDAsIwPDyHZ2AALgDBIYFBGB4+Y5OQADcAQLDAgIwvHxHJyAA7gCBYQEBGF6+oxMQAHeAwLCAAAwv39EJCIA7QGBYQACGl+/oBATAHSAwLCAAw8t3dAIC4A4QGBYQgOHlOzoBAXAHCAwLCMDw8h2dgAC4AwSGBQRgePmOTkAA3AECwwICMLx8RycgAO4AgWEBARhevqMTEAB3gMCwgAAML9/RCQiAO0BgWEAAhpfv6AQEwB0gMCwgAMPLd3QCkwH4sncCBwjcPvCNAvABZL+CwDsCAvCO2gv/xwvgBSQ/8uMCAlBagQCUYI2NCghAlPM5TABKsMZGBQQgyikAJU5jSwICUIL1AijBGhsVEIAopxdAidPYkoAAlGC9AEqwxkYFBCDK6QVQ4jS2JCAAJVgvgBKssVEBAYhyegGUOI0tCQhACdYLoARrbFRAAKKcXgAlTmNLAgJQgvUCKMEaGxUQgCinF0CJ09iSgACUYL0ASrDGRgUEIMppGAEC3wUm/yCIa0CAwENAANwEAsMCAjC8fEcnIADuAIFhAQEYXr6jExAAd4DAsIAADC/f0QkIgDtAYFhAAIaX7+gEBMAdIDAsIADDy3d0AgLgDhAYFhCA4eU7OgEBcAcIDAsIwPDyHZ2AALgDBIYFBGB4+Y5OQADcAQLDAgIwvHxHJyAA7gCBYQEBGF6+oxMQAHeAwLCAAAwv39EJCIA7QGBYQACGl+/oBATAHSAwLCAAw8t3dAIC4A4QGBYQgOHlOzoBAXAHCAwLCMDw8h2dgAC4AwSGBQRgePmOTmAyAF/2TuAAgdsHvlEAPoDsVxB4R0AA3lF74f94AbyA5Ed+XEAASisQgBKssVEBAYhyPocJQAnW2KiAAEQ5BaDEaWxJQABKsF4AJVhjowICEOX0AihxGlsSEIASrBdACdbYqIAARDm9AEqcxpYEBKAE6wVQgjU2KiAAUU4vgBKnsSUBASjBegGUYI2NCghAlNMLoMRpbElAAEqwXgAlWGOjAgIQ5fQCKHEaWxIQgBKsF0AJ1tiogABEOQ0jQOC7wOQfBHENCBB4CAiAm0BgWEAAhpfv6AQEwB0gMCwgAMPLd3QCAuAOEBgWEIDh5Ts6AQFwBwgMCwjA8PIdnYAAuAMEhgUEYHj5jk5AANwBAsMCAjC8fEcnIADuAIFhAQEYXr6jExAAd4DAsIAADC/f0QkIgDtAYFhAAIaX7+gEBMAdIDAsIADDy3d0AgLgDhAYFhCA4eU7OgEBcAcIDAsIwPDyHZ2AALgDBIYFBGB4+Y5OQADcAQLDAgIwvHxHJyAA7gCBYQEBGF6+oxMQAHeAwLCAAAwv39EJ/FcBsA4CBM4TuN+u60qU5Lyj+2ICBATAHSAwLCAAw8t3dAIC4A4QGBYQgOHlOzoBAXAHCAwLCMDw8h2dgAC4AwSGBQRgePmOTkAA3AECwwICMLx8RycgAO4AgWEBARhevqMTEAB3gMCwgAAML9/RCQiAO0BgWOD+B2j49XwA8KsqAAAAAElFTkSuQmCC' alt="Smiley face" style={{height:'30px', width:'30px', marginLeft:'10px'}}/>}/>
              
            {/* </Col> */}
          
          <Row>
            <Col span={24}>
            <img src = {'http://mjsong.iptime.org:3001/products/image/2/' + this.state.product_id}/>
            </Col>
          </Row>
          {/* <Row style={subTitle}> */}
            {/* <Col span={6}> */}
             <Subtitle title='Review' img={<img src = 'data:image/png;base64,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
              pJv/4L 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'alt="Smiley face" style={{height:'30px', width:'30px', marginLeft:'10px'}}/>
           }/>
               {/* </Col> */}
          {/* </Row> */}
          <Row>
            <Col span={14} offset={5}>
              <Review reviews={this.state.reviews}/>
              <Row style={{paddingTop:'10px'}}>
                <Col span = {4} offset={20}>
                  <ReviewModal product_id={this.state.product_id} reviews={this.state.info.reviews} reviewAdded={this.reviewAdded}/>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        </Row>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
	return{
		user: state.currentUser.user,
		Cart: state.Cart.Cart,
	}
}
const mapDispatchtoProps = (dispatch) => {
	return {
		addCart: (Product) => dispatch(addCart(Product)) 
	}
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Product);
