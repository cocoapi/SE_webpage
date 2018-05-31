import React, { Component } from 'react';
import { Modal, Button, Rate, Input, Row, Col } from 'antd';
import AddproductForm  from '../components/AddproductForm'
const { TextArea } = Input;

class AddproductModal extends Component{
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
              작성하기
            </Button>
            <Modal 
              visible={visible}
              title="상품 추가"
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              width = '500px'
            //   footer={[
            //     <Button key="back" onClick={this.handleCancel}>취소</Button>,
            //     <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
            //       추가
            //     </Button>,
            //   ]}
            >
              
                <AddproductForm/>
            
            </Modal>
          </div>
        );
      }
 }


export default AddproductModal;