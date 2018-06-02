import React, { Component } from 'react';
import { Modal, Button, Rate, Input, Row, Col } from 'antd';
import AddProductForm  from '../components/AddProductForm'
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
            <Button type="primary" onClick={this.showModal}>
              상품추가
            </Button>
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