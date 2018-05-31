import React, { Component } from 'react';
import {
    Form, Select, InputNumber, Switch, Radio,
    Slider, Button, Upload, Icon, Rate, DatePicker, Input
  } from 'antd';
  import '../App.css'
  const FormItem = Form.Item;
  const Option = Select.Option;
  const RadioButton = Radio.Button;
  const RadioGroup = Radio.Group;
  
  class ProductForm extends React.Component {
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    }
    normFile = (e) => {
      console.log('Upload event:', e);
      if (Array.isArray(e)) {
        return e;
      }
      return e && e.fileList;
    }
    render() {
      const { getFieldDecorator } = this.props.form;
      const formItemLayout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 14 },
      };
      return (
        <Form onSubmit={this.handleSubmit}>
          <FormItem
            {...formItemLayout}
            label="Name"
          >
            {getFieldDecorator('Name', {
              rules: [
                { message: '제품 이름을 입력하세요' },
              ],
            })(
              <Input/>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="Platform"
          >
            {getFieldDecorator('Platform')(
              <RadioGroup>
                <Radio value="a">PS</Radio>
                <Radio value="b">NINTENDO</Radio>
                <Radio value="c">XBOX</Radio>
              </RadioGroup>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="Catalog"
          >
            {getFieldDecorator('Catalog')(
              <RadioGroup>
                <RadioButton value="a">하드웨어</RadioButton>
                <RadioButton value="b">타이틀</RadioButton>
              </RadioGroup>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="Provider"
          >
            {getFieldDecorator('Provider', {
              rules: [
                { message: 'Please select your favourite colors!', type: 'array' },
              ],
            })(
              <Input/>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="Release_date"
           >
            {getFieldDecorator('Release_date', {
                 rules: [
                    { type: 'object', message: 'Please select time!' }],
            })(
                <DatePicker />
          )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="Price"
          >
            {getFieldDecorator('Price', {
              rules: [
                { message: '가격을 입력하세요' },
              ],
            })(
              <Input/>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="upload"
          >
            {getFieldDecorator('upload', {
              valuePropName: 'fileList',
              getValueFromEvent: this.normFile,
            })(
              <Upload name="logo" action="/upload.do" listType="picture">
                <Button>
                  <Icon type="upload" /> Click to upload
                </Button>
              </Upload>
            )}
          </FormItem>
          <FormItem
            wrapperCol={{ span: 12, offset: 6 }}
          >
            <Button type="primary" htmlType="submit">Submit</Button>
          </FormItem>
        </Form>
      );
    }
  }

  const AddproductForm = Form.create()(ProductForm);

  export default AddproductForm;