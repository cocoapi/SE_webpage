import React, { Component } from 'react';
import { Form, Input, Tooltip, Icon, Select, Button, Modal, Row, Col  } from 'antd';
import DaumPostcode from 'react-daum-postcode';
import axios from 'axios';
import Subtitle from '../components/Subtitle'
const FormItem = Form.Item;
const Option = Select.Option;

class RegistrationForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      confirmDirty: false,
      autoCompleteResult: [],
      clicked: false,
      fulladdress: '',
      postNumber: '',
    }
   this.callPost= this.callPost.bind(this);
  }

  componentDidMount(){
    window.scrollTo(0, 0)
  }

  getAddress = (data) => {
    const addr = data.address;
    const code = data.postcode

    this.setState({
      fulladdress: addr,
      postNumber: code,
    });
    this.residenceWarn();
  }

  callPost(){
    this.state.clicked? 
    this.setState({
      clicked : false
    })
    :
    this.setState({
      clicked : true
    });
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
		axios.post('http://mjsong.iptime.org:3001/users', {
			email: values.email,
			nickname: values.nickname,
			phone: values.prefix + values.phone,
			address: this.state.fulladdress,
			address_detail: values.residence2,
			post_code: this.state.postNumber,
			password: values.password,
		})
		.then(r => {
			console.log(r)
			Modal.success({title:'회원가입 완료', content:'회원가입이 완료되었습니다.', onOk(){window.location.href='/Login'}})
		})
		.catch(e => {
			console.log(e.response);
			if(e.response.status === 301){
				console.log("중복회원")
			}
		})
      }
    });
  }
  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }
  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('패스워드가 일치하지 않습니다!');
    } else {
      callback();
    }
  }
  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }
  handleWebsiteChange = (value) => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  }
  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '010',
    })(
      <Select style={{ width: 70 }}>
        <Option value="010">010</Option>
        <Option value="02">02</Option>
        <Option value="031">031</Option>
      </Select>
    );

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          {...formItemLayout}
          label="이메일"
        >
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: '존재하지 않는 이메일입니다.',
            }, {
              required: true, message: '이메일을 입력 해 주세요!',
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="비밀번호"
        >
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: '비밀번호를 입력 해 주세요!',
            }, {
              validator: this.validateToNextPassword,
            }],
          })(
            <Input type="password" />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="비밀번호 확인"
        >
          {getFieldDecorator('confirm', {
            rules: [{
              required: true, message: '비밀번호를 확인 해 주세요!',
            }, {
              validator: this.compareToFirstPassword,
            }],
          })(
            <Input type="password" onBlur={this.handleConfirmBlur} />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label={(
            <span>
              이름&nbsp;
              <Tooltip title="이름을 입력해주세요">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          )}
        >
          {getFieldDecorator('nickname', {
            rules: [{ required: true, message: '이름을 입력하세요!', whitespace: true }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem 
          {...formItemLayout}
          label="거주지"
        >
          {getFieldDecorator('residence', {
            initialValue: ['도', '시/군/구', '동'],
            rules: [{required: true, message: '거주지를 선택하세요!' }],
          })(
            <div onClick={this.callPost}>
                  <Input placeholder='클릭 해주세요' value={this.state.fulladdress}></Input>
                 <div style={{position:'absolute', zIndex:100}}>
                  {
                    this.state.clicked ?
                    <DaumPostcode
                      onComplete={data => this.getAddress(data)}
                      autoClose="true"
                      {...this.props}
                      /> : null
                  }
                  </div>
            </div>
          )}
        </FormItem>
        <FormItem 
          {...formItemLayout}
          label="상세주소"
        >
          {getFieldDecorator('residence2', {
            rules: [{ required: true, message: '상세주소를 입력', whitespace: true }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem 
          {...formItemLayout}
          label="전화번호"
        >
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: '전화번호를 입력하세요!' }],
          })(
            <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">회원가입</Button>
        </FormItem>
      </Form>
      );
    }
  }

const WrappedRegistrationForm = Form.create()(RegistrationForm);


class Register extends Component {
  render() {
    return (
      <div>
        <Subtitle title='회원가입'/>
        <Row>
          <Col span={8} offset={8} style={{padding:'30px', backgroundColor:'whiteSmoke'}}>
            <WrappedRegistrationForm style={{border: '1px soid gray'}} history={this.props.history}/>
          </Col>
        </Row> 
      </div>
    );
  }
}

export default Register;
