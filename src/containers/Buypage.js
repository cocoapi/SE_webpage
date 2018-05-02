import React, { Component } from 'react';
import { Button } from 'antd';
import LoginForm from '../components/LoginForm';

class Buypage extends Component {
  render() {
    return (
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
                    <Button style={{ width: '150px' }}type="primary" htmlType="submit"> 주문하기 </Button>
                </div>
            </div>
            <div style={{width:'25%'}} />
        </div>
        <div style={{height:'30%'}}/>
	  </div>
    );
  }
}

export default Buypage;
