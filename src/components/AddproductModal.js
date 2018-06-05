import React, { Component } from 'react';
import { Modal, Button, Rate, Input, Row, Col, Icon } from 'antd';
import AddProductForm  from '../components/AddproductForm'
const { TextArea } = Input;

class AddProductModal extends Component{
    constructor(props) {
      super(props);
      this.state = {
      };
    }

    state = {
        loading: false,
        visible: false,
      }
      showModal = () => {
        this.setState({
          visible: true,
        });
      }
      handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
          this.setState({ loading: false, visible: false });
        }, 3000);
      }
      handleCancel = () => {
        this.setState({ visible: false });
      }

      
      render() {
        const { visible, loading } = this.state;
        return (
          <div>
			<div style={{color: 'white'}} onClick={this.showModal}>
				<Icon type="file-add" /> 상품추가
			</div>
            <Modal 
              visible={visible}
              title="상품 추가"
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              width = '500px'
              footer={null}
            >
                <AddProductForm handleOk={this.handleOk} loading={this.state.loading}/>
            
            </Modal>
          </div>
        );
      }
 }


export default AddProductModal;
