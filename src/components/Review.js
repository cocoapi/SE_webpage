import React, { Component } from 'react';
import { Collapse, Rate, Col } from 'antd';
const Panel = Collapse.Panel;

class Review extends Component{
    constructor(props) {
      super(props);
      this.state = {
        reviews: this.props.reviews
      };
    }

    render(){
      const reviewList = this.state.reviews.map( (review, index) => {
        return(
              <Panel header={review.title} key={index+1} style={{textAlign:'left'}}>
                <p>
                  <Rate disabled defaultValue={review.rate} />
                </p>
                <p>
                  {review.content}
                </p>
                <p style={{textAlign: 'right'}}>
                  {review.email}
                </p>
              </Panel>
        )});

    return(
      <Collapse accordion style={{textAlign: '1eft'}}>
        {reviewList}
      </Collapse>
  )}   
}

export default Review;