import React, { Component } from 'react';
import { Modal, Button, Rate, Input, Row, Col } from 'antd';
const { TextArea } = Input;

class ReviewModal extends Component{
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
              title="리뷰 작성"
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              footer={[
                <Button key="back" onClick={this.handleCancel}>취소</Button>,
                <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                  작성
                </Button>,
              ]}
            >
              <Row>
                <p>Title</p>
                <p><Input/></p>
                <p>Contents</p>
                <p><TextArea rows={4}/></p>
                <p>Rating</p>
                <p><Rate/></p>
              </Row>
            </Modal>
          </div>
        );
      }
 }


export default ReviewModal;