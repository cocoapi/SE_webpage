import React, { Component } from 'react';
import { Button, Row, Col, Table, Input} from 'antd';
import LoginForm from '../components/LoginForm';
const { Column }  = Table;
const InputGroup = Input.Group;

const dataSource = [{
    key: '1',
    name: 'SuperMario',
    quantity: 1,
    price: 23000,
  }, {
    key: '2',
    name: '진삼국무쌍',
    quantity: 1,
    price: 35000,
  }];

class Buypage extends Component {
    constructor(props){
        super(props);
        this.state = {
            apporove : false,
            dataSource : dataSource,
        }
        this.clickOrder= this.clickOrder.bind(this);
    }
    
    clickOrder = () => {
        this.setState({apporove : true});
    };

    render() {
        return (
            this.state.apporove == false ? 
                <div style={{height: '800px', display:'flex', flexDirection:'column'}}>
                    <div style={{height:'30%'}}/>
                    <div style={{height:'40%', display:'flex', flexDirection:'row'}}>
                        <div style={{width:'25%'}} />
                        <div style={{width:'30%', padding: '8px'}}>
                            <LoginForm />
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
                <Row style={{marginTop:'10px', borderBottom:'1px solid black', paddingBottom:'5px', textAlign:'left'}}>
                    <Col span={6}><strong><h2>주문/결제</h2></strong></Col>
                </Row>

                <Row style={{marginTop:'30px', borderBottom:'1px solid black', textAlign:'left'}}>
                    <Col span={6}><h4>주문리스트</h4></Col>
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
                <Row style={{marginTop:'20px', borderBottom:'1px solid black', textAlign:'left'}}>
                    <Col span={6}><h4>주문자정보</h4></Col>
                </Row>
                <Row style={{borderBottom:'0.5px solid gray', paddingBottom:'3px', marginTop:'3px'}}>
                    <Col span={3}><div style={{textAlign:'center', paddingTop:'2px'}}>이름</div></Col>
                    <Col span={3}><Input size='small'/></Col>
                </Row>
                <Row style={{borderBottom:'0.5px solid gray', paddingBottom:'3px', marginTop:'3px'}}>
                    <Col span={3}><div style={{textAlign:'center', paddingTop:'2px'}}>이메일</div></Col>
                    <Col span={4}><Input size='small'/></Col>
                </Row>
                <Row style={{borderBottom:'1px solid black', paddingBottom:'3px', marginTop:'3px'}}>
                    <Col span={3}><div style={{textAlign:'center', paddingTop:'2px'}}>연락처</div></Col>
                    <Col span={13}>
                        <InputGroup size="small">
                            <Col span={2}>
                                <Input defaultValue="010" />
                            </Col>
                            <Col span={4}>
                                <Input defaultValue="2676-6413" />
                            </Col>
                        </InputGroup>
                    </Col>
                </Row>
                
                <Row style={{marginTop:'20px', borderBottom:'1px solid black', textAlign:'left'}}>
                    <Col span={6}><h4>배송정보</h4></Col>
                </Row>
                <Row style={{borderBottom:'0.5px solid gray', paddingBottom:'3px', marginTop:'3px'}}>
                    <Col span={3}><div style={{textAlign:'center', paddingTop:'2px'}}>이름</div></Col>
                    <Col span={3}><Input size='small'/></Col>
                </Row>
                <Row style={{borderBottom:'0.5px solid gray', paddingBottom:'3px', marginTop:'3px'}}>
                    <Col span={3}><div style={{textAlign:'center', paddingTop:'2px'}}>연락처</div></Col>
                    <Col span={13}>
                        <InputGroup size="small">
                            <Col span={2}>
                                <Input defaultValue="010" />
                            </Col>
                            <Col span={4}>
                                <Input defaultValue="2676-6413" />
                            </Col>
                        </InputGroup>
                    </Col>
                </Row>
                <Row style={{borderBottom:'0.5px solid gray', paddingBottom:'3px', marginTop:'3px'}}>
                    <Col span={3}><div style={{textAlign:'center', paddingTop:'2px'}}>우편번호</div></Col>
                    <Col span={13}>
                        <InputGroup size="small">
                            <Col span={2}>
                                <Input defaultValue="431" />
                            </Col>
                            <Col span={2}>
                                <Input defaultValue="070" />
                            </Col>
                        </InputGroup>
                    </Col>
                </Row>
                <Row style={{borderBottom:'1px solid black', paddingBottom:'3px', marginTop:'3px'}}>
                    <Col span={3}><div style={{textAlign:'center', paddingTop:'2px'}}>주소</div></Col>
                    <Col span={3}><Input size='small'/></Col>
                </Row> 
              
                </div>
                
        );
    }
}

export default Buypage;
