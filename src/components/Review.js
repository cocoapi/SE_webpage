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
      var reviewList = (data) =>{
        <Collapse accordion>
            {data.map((review, index) => (
              <Panel header={review.title} key={index+1}>
                <p>{review.content}</p>
              </Panel>
            ))};
        </Collapse>
      };

      return(
        <div>
          {reviewList(this.state.reviews)}
        </div>
    )}   
}

export default Review;