import React, { Component } from 'react';
import { Collapse } from 'antd';
const Panel = Collapse.Panel;


const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

class Review extends Component{
    render(){
        return(
          <Collapse accordion>
          <Panel header="너무 좋아요!" key="1">
            <p>{text}</p>
          </Panel>
          <Panel header="재밌습니다." key="2">
            <p>{text}</p>
          </Panel>
          <Panel header="재미 없어요." key="3">
            <p>{text}</p>
          </Panel>
        </Collapse>
    )}   
}

export default Review;