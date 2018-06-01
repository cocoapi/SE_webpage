import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUser } from '../actions/index';

const FormItem = Form.Item;

class Login extends Component {
		constructor(props){
			super(props);
			this.state = {
				success: false,
			}
		}
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
						console.log('Received values of form: ', values);  
						axios.post('http://mjsong.iptime.org:3001/users/login', {email: values.userName, password: values.password})
							.then( r => {
								this.props.userLogin(r.data);
							})
						.catch( e => {
							console.log(e);
						});
						this.props.location.pathname === '/Buy' ? null : this.props.history.goBack();			
						}
        });
      }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
					<Form onSubmit={this.handleSubmit} className="login-form">
						<FormItem>
							{getFieldDecorator('userName', {
															   rules:[{ required: true, message: 'Please input your username!' }],
							})(
								<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
							)}
						</FormItem>
						<FormItem>
							{getFieldDecorator('password', {
								rules: [{ required: true, message: 'Please input your Password!' }],
							})(
								<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
							)}
						</FormItem>
						<FormItem>
							{getFieldDecorator('remember', {
								valuePropName: 'checked',
								initialValue: true,
							})(
								<Checkbox>Remember me</Checkbox>
							)}
							<Button size='large' type="primary" htmlType="submit" className="login-form-button">
								Log in
							</Button> 
							<br />
							<a className="login-form-forgot" href="">Forgot password 	</a>
							Or <a href="/Resistration">register now!</a>
						</FormItem>
					</Form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
	return {
		userLogin: (user) => dispatch(setUser(user))
	};
}

const LoginForm = Form.create()(Login);

export default connect(undefined, mapDispatchToProps)(LoginForm);
