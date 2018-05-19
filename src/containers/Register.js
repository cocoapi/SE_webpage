import React, { Component } from 'react';
import { Form, Input, Tooltip, Icon, Cascader, Select, Button, AutoComplete } from 'antd';
import DaumPostcode from 'react-daum-postcode';
const FormItem = Form.Item;
const Option = Select.Option;
//const AutoCompleteOption = AutoComplete.Option;

class RegistrationForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      confirmDirty: false,
      autoCompleteResult: [],
      clicked: false,
      fulladdress: '',
    }
   this.callPost= this.callPost.bind(this);
  }

  getAddress = (data) => {
    const addr = data.address;
    this.setState({
      fulladdress: addr,
    });
    console.log(this.state.fulladdress); 
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
        console.log('Received values of form: ', values);
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
      callback('Two passwords that you enter is inconsistent!');
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
   // const { autoCompleteResult } = this.state;

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
      initialValue: '86',
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    );

    // const websiteOptions = autoCompleteResult.map(website => (
    //   <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    // ));

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
              닉네임&nbsp;
              <Tooltip title="다른 멤버가 뭐라고 부르길 희망하나요?">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          )}
        >
          {getFieldDecorator('nickname', {
            rules: [{ required: true, message: '닉네임을 입력하세요!', whitespace: true }],
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
            rules: [{ type: 'array', required: true, message: '거주지를 선택하세요!' }],
          })(
            <div onClick={this.callPost}>
                  <Input value={this.state.fulladdress}></Input>
                 
                  {
                    this.state.clicked ?
                    <DaumPostcode
                      onComplete={data => this.getAddress(data)}
                      {...this.props}
                      /> : null
                  }
            </div>
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
          <div style={{height:'1000px', display:'flex', flexDirection:'column'}}>
            <div style={{height: '20%', display:'flex', flexDirection:'column', fontFamily: "Comic Sans MS" , fontsize: "30px", backgroundColor: 'LightGray'}}>
              <div style={{height: '40%'}}/>
              <div style={{height: '20%'}}>
                <h1>회원가입</h1>
              </div>
              <div style={{height: '40%'}}/>
            </div>
            <div style={{height: '50%', display: 'flex', flexDirection:'row', marginTop: '40px'}}>
              <div style={{width: '30%'}}/>
              <div style={{width: '40%', border: '1px solid gray', padding: '40px'}}>
                <WrappedRegistrationForm style={{border: '1px soid gray'}}/>
              </div>
            </div>
	        </div>
    );
  }
}

export default Register;
