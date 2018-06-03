import React, { Component } from 'react';
import { Modal, Button, Rate, Input, Row, Col, Icon } from 'antd';
import UpdateProductForm  from '../components/UpdateProductForm'
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
            <Icon type="edit" onClick={this.showModal}/>
            <Modal 
              visible={visible}
              title="상품 변경"
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              width = '500px'
              footer={null}
            >
                <UpdateProductForm handleOk={this.handleOk} loading={this.state.loading} product={this.props.product}/>
            
            </Modal>
          </div>
        );
      }
 }


export default AddProductModal;