import React, { Component } from 'react';
import { Collapse } from 'antd';
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
              <Panel header={review.title} key={index+1}>
                <p>{review.content}</p>
              </Panel>
        )});

    return(
      <Collapse accordion>
        {reviewList}
      </Collapse>
  )}   
}

export default Review;