import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Row, Col, Table, Input, Radio, Modal } from 'antd';
import axios from 'axios';
import LoginForm from '../components/LoginForm';
const { Column }  = Table;
const InputGroup = Input.Group;
const RadioGroup = Radio.Group;


  const smallSub = {
    fontSize: '20px'
  }

  const smallSubDiv = {
    marginTop:'50px',
    borderBottom:'1px solid black',
    textAlign:'left'
  }

  const smallContent = {
    borderBottom:'0.5px solid gray', 
    paddingBottom:'10px', 
    marginTop:'10px'
  }

  const smallContentBottom = {
    borderBottom:'1px solid gray', 
    paddingBottom:'10px', 
    marginTop:'10px'
  }

const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
};


class Buypage extends Component {
    constructor(props){
        super(props);
        this.state = {
            apporove : props.user.logged_in ? true : false,
			user: props.user.user,
            dataSource : props.Cart,
			recvName: '',
			recvPhone: '',
			recvPost: '',
			recvAddr: '',
			recvAddrDetail: '',
			pMethod: '',
			visible: false,
        }
        this.clickOrder= this.clickOrder.bind(this);
    }

    componentDidMount(){
        window.scrollTo(0, 0)
    }

	onChangeInput = e => {
		this.setState(e)
	}

    componentWillReceiveProps(nextProps){
        nextProps.user.logged_in ? this.setState({apporove: true, user:nextProps.user.user, dataSource:nextProps.Cart}) : null
    }

    clickOrder = () => {
        this.setState({apporove : true});
    };
    
	render() {
        return (
           this.state.apporove === false ? 
                <div style={{height: '800px', display:'flex', flexDirection:'column'}}>
                    <div style={{height:'30%'}}/>
                    <div style={{height:'40%', display:'flex', flexDirection:'row'}}>
                        <div style={{width:'25%'}} />
                        <div style={{width:'30%', padding: '8px'}}>
                            <LoginForm history={this.props.history} location={this.props.location}/>
                        </div>
                        <div style={{width:'30%', padding: '8px', display:'flex', flexDirection:'column'}}>
                            <div style={{ height: '25%'}} />
                            <div>
                                <p> 비회원 주문하기 </p>
                                <Button style={{ width: '150px' }}type="primary" htmlType="submit" onClick={this.clickOrder}> 주문하기 </Button>
                            </div>
                        </div>
                        <div style={{width:'25%'}} />
                    </div>
                    <div style={{height:'30%'}}/>
                </div>
                :
                <div>
                    {console.log(this.state.user)}
                <Row>
                  <Col span={20} offset={2}>
                    <Row style={{marginTop:'50px', borderBottom:'1px solid black', paddingBottom:'5px', textAlign:'left'}}>
                        <Col span={6}><strong style={{fontSize:'30px'}}>주문/결제</strong></Col>
                    </Row>

                    <Row style={smallSubDiv}>
                        <Col span={6}><h4 style={smallSub}>주문리스트</h4></Col>
                    </Row>

                    <Table dataSource={this.state.dataSource} 
                        pagination={false}  
                        footer= {() => { 
                            let total = 0
                            this.state.dataSource.forEach((source) =>
                            total += source.quantity * source.price)
                            return <p style={{textAlign:'right'}}> 총 구매금액: {total.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}원</p>
                        }}
                    >
                        <Column
                            title= '번호'
                            dataIndex= 'key'
                            key= 'key'
                        />
                        <Column
                            title= '제품'
                            dataIndex= 'name'
                            key= 'name'
                            render= {(text) => (<div>{text}</div>)}
                        />
                        <Column
                            title= '수량'
                            dataIndex= 'quantity'
                            key= 'quantity'
                            width= {70}
                            render= {(text, record) => ( <div>{text}</div> )}
                        />
                        <Column
                            title= '가격'
                            dataIndex= 'price'
                            key= 'price'
                            render= {(text, record) => {
                            let total_price = text * this.state.dataSource[record.key-1].quantity
                            return <div style={{width: '100px'}}>{total_price.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}원</div>
                            }}
                        />
                    </Table>
                    <Row style={smallSubDiv}>
                        <Col span={6}><h4 style={smallSub}>주문자정보</h4></Col>
                    </Row>
                    <Row style={smallContent}>
                        <Col span={3}><div style={{textAlign:'center', paddingTop:'2px'}}>이름</div></Col>
                        <Col span={3}><Input size='small' defaultValue={this.state.user.nickname}/></Col>
                    </Row>
                    <Row style={smallContent}>
                        <Col span={3}><div style={{textAlign:'center', paddingTop:'2px'}}>이메일</div></Col>
                        <Col span={4}><Input size='small' defaultValue={this.state.user.email}/></Col>
                    </Row>
                    <Row style={smallContentBottom}>
                        <Col span={3}><div style={{textAlign:'center', paddingTop:'2px'}}>연락처</div></Col>
                        <Col span={13}>
                            <InputGroup size="small">
                                <Col span={6}>
                                    <Input defaultValue={this.state.user.phone} />
                                </Col>
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row style={smallSubDiv}>
                        <Col span={6}><h4 style={smallSub}>배송정보</h4></Col>
                    </Row>
                    <Row style={smallContent}>
                        <Col span={3}><div style={{textAlign:'center', paddingTop:'2px'}}>이름</div></Col>
                        <Col span={3}><Input size='small' defaultValue={this.state.user.nickname} onChange={e => this.onChangeInput({ recvName: e.target.value })}/></Col>
                    </Row>
                    <Row style={smallContent}>
                        <Col span={3}><div style={{textAlign:'center', paddingTop:'2px'}}>연락처</div></Col>
                        <Col span={13}>
                            <InputGroup size="small">
                                <Col span={6}>
                                    <Input defaultValue={this.state.user.phone} onChange={e => {this.onChangeInput({recvPhone:e.target.value})}}/>
                                </Col>
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row style={smallContent}>
                        <Col span={3}><div style={{textAlign:'center', paddingTop:'2px'}}>우편번호</div></Col>
                        <Col span={13}>
                            <InputGroup size="small">
                                <Col span={4}>
                                    <Input defaultValue={this.state.user.post_code} />
                                </Col>
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row style={smallContent}>
                        <Col span={3}><div style={{textAlign:'center', paddingTop:'2px'}}>주소</div></Col>
                        <Col span={4}><Input size='small' defaultValue={this.state.user.address} /></Col>
                    </Row>
                    <Row style={smallContentBottom}>
                        <Col span={3}><div style={{textAlign:'center', paddingTop:'2px'}}>상세주소</div></Col>
                        <Col span={4}><Input size='small' defaultValue={this.state.user.address_detail} onChange={e => this.onChangeInput({ recvAddr: e.target.value })}/></Col>
                    </Row>

                    <Row style={smallSubDiv}>
                        <Col span={6}><h4 style={smallSub}>결제방법</h4></Col>
                    </Row>
                    <Row style={smallContentBottom}>
                      <Col span={3}>
						<RadioGroup onChange={e => this.onChangeInput({ pMethod: e.target.value })}>
							<Radio style={radioStyle} value={'계좌이체'}>계좌이체</Radio>
							<Radio style={radioStyle} value={'신용카드'}>신용카드</Radio>
						</RadioGroup>
					  </Col>
                    </Row>

                    <Row>
                      <Col span={6} offset={9} style={{marginTop:'50px'}}> 
                        <Button type="primary" style={{marginRight: '8px'}} onClick={() => {
							axios.post('http://mjsong.iptime.org:3001/purchHists/hist/move/'+this.state.user.email,{
									name: this.state.user.nickname,
									payment_method: this.state.pMethod,
									phone: this.state.user.phone,
									name_recv: this.state.recvName === '' ? this.state.user.nickname : this.state.recvName,
									phone_recv: this.state.recvPhone === '' ? this.state.user.phone : this.state.recvPhone,
									post_code: this.state.recvPost === '' ? this.state.user.post_code : this.state.recvPost,
									address: this.state.recvAddr === '' ? this.state.user.address : this.state.recvAddr,
									address_detail: this.state.recvAddrDetail === '' ? this.state.user.address_detail : this.state.recvAddrDetail,
								})
							.then(r => {
								this.setState({visible: true});
							})
							.catch(e => {})
						}} size='large'>주문하기</Button>
						<Modal title='주문완료' visible={this.state.visible} onCancel={()=>this.setState({visible:false})} onOk={()=>this.props.history.push('/OrderedList/'+this.state.user.email)}>
							주문을 확인하시겠습니까?
						</Modal>
                        <Button type="danger" style={{marginLeft: '8px'}} size='large'>주문취소</Button>
                      </Col>
                    </Row>
                  </Col> 
                </Row>
                </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.currentUser,
		Cart: state.Cart.Cart,
    }
}

export default connect(mapStateToProps)(Buypage);
