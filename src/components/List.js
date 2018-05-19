import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';

class List extends Component {
  render() {
    return (
      <div style={{
 height: '300px', display: 'flex', flexDirection: 'row', padding: '8px',
}}
      >
        <Link to={"/Product/" + 'supermario'}>
		{this.props.data !== 'Nintendo' ?
		  <Card title="Card title" style={{ width: 200, height: 284 }}>
            <p> title </p>
            <p> price </p>
          </Card>
		  :
		  <Card title='슈퍼마리오' style={{ width: 200, height: 284 }}>
			<p> '슈퍼마리오' <br/>
				'38000원' </p>
			</Card>
		}
        </Link>
      </div>
    );
  }
}

export default List;
