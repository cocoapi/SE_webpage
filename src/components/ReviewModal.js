import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Button, Rate, Input, Row, Col } from 'antd';
import axios from 'axios';
const { TextArea } = Input;

class ReviewModal extends Component{
    constructor(props) {
      super(props);
      this.state = {
        user: props.user,
        title:'',
        content:'',
        rate:0,
        product_id: props.product_id
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
        axios.post(`http://mjsong.iptime.org:3001/products/review/${this.state.product_id}`, {
            title: this.state.title,
            email: this.props.user.email,
            content: this.state.content,
            rate: this.state.rate
        })
        .then(r => {
          console.log(r)
          this.props.reviewAdded(r);
        })
        .catch(e => {
          console.log(e)
        })        
        
        this.setState({ loading: true });
        setTimeout(() => {
          this.setState({ loading: false, visible: false });
        }, 3000);
      }
      handleCancel = () => {
        this.setState({ visible: false });
      }

      onChangeRate = (value) => {
          console.log(value)
          this.setState({rate: value})
      }

      onTitleChange = (event) => {
        console.log(event.target.value);
        this.setState({title: event.target.value})
      }

      onContentChange = (event) => {
        console.log(event.target.value);
        this.setState({content: event.target.value})
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
                <p><Input onChange={this.onTitleChange}/></p>
                <p>Contents</p>
                <p><TextArea rows={4} onChange={this.onContentChange}/></p>
                <p>Rating</p>
                <p><Rate onChange={this.onChangeRate}/></p>
              </Row>
            </Modal>
          </div>
        );
      }
 }


 const mapStateToProps = (state) => {
	return {
		user: state.currentUser,
	}
}

export default connect(mapStateToProps)(ReviewModal);
