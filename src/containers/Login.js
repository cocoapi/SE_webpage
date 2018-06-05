import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';

class Login extends Component {
<<<<<<< HEAD
  componentDidMount() {
    window.scrollTo(0, 0)
  }
=======
  componentDidMount(){
    window.scrollTo(0, 0)
  }
  
>>>>>>> bb8ddf162aefdcca00d4168f6a244eb8a2e29861
  render() {
    return (
      <div style={{ height: '800px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ height: '30%' }} />
        <div style={{ height: '40%', display: 'flex', flexDirection: 'row' }}>
          <div style={{ width: '35%' }} />
          <div style={{ width: '30%', padding: '8px' }}>
            <LoginForm history={this.props.history} location={this.props.location} />
          </div>
          <div style={{ width: '35%' }} />
        </div>
        <div style={{ height: '30%' }} />
      </div>
    );
  }
}

export default Login;
