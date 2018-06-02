import React, { Component } from 'react';
import axios from 'axios';
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
    constructor(props){
			super(props);
			this.state = {
        image: {},
        subImage: {}
			}
    }
    
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
        const fd = new FormData();
        fd.append('img', this.state.image, this.state.image.name);
        fd.append('imgSub', this.state.subImage, this.state.subImage.name);
        fd.append('name', values.Name);
        fd.append('catalog', values.Catalog);
        fd.append('platform', values.Platform);
        fd.append('provider', values.Provider);
        fd.append('release_date', values.Release_date);
        fd.append('price', values.Price);
        fd.append('stock', values.Stock);

        axios.post('http://mjsong.iptime.org:3001/products/product', fd)
              .then(r => {
                console.log(r)
              })
              .catch(e => {
                console.log(e)
              })
      });
    }
    normFile = (e) => {
      console.log('Upload event:', e);
      if (Array.isArray(e)) {
        return e;
      }
      return e && e.fileList;
    }

    imageHandler = (event) => {
      console.log(event.target.files[0])
      this.setState({image : event.target.files[0]});
    }

    subImageHandler = (event) => {
      this.setState({subImage : event.target.files[0]});
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
                <Radio value="PlayStation">PS</Radio>
                <Radio value="NINTENDO">NINTENDO</Radio>
                <Radio value="XBOX">XBOX</Radio>
              </RadioGroup>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="Catalog"
          >
            {getFieldDecorator('Catalog')(
              <RadioGroup>
                <RadioButton value="hardware">하드웨어</RadioButton>
                <RadioButton value="title">타이틀</RadioButton>
              </RadioGroup>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="Provider"
          >
            {getFieldDecorator('Provider', {
              rules: [
                { message: 'Please select your favourite colors!'},
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
            label="Stock"
          >
            {getFieldDecorator('Stock', {
              rules: [
                { message: '재고를 입력하세요' },
              ],
            })(
              <Input/>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="Image"
          >
            {getFieldDecorator('upload', {
            })(
              <input type='file' onChange={this.imageHandler}/>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="Sub Image"
          >
            {getFieldDecorator('upload2', {
            })(
              <input type='file' onChange={this.subImageHandler}/>
            )}
          </FormItem>
          <FormItem
            wrapperCol={{ span: 12, offset: 6 }}
          >
            <Button type="primary" htmlType="submit" onClick={this.props.handleOk} loading={this.props.loading}>Submit</Button>
          </FormItem>
        </Form>
      );
    }
  }

  const AddProductForm = Form.create()(ProductForm);

  export default AddProductForm;