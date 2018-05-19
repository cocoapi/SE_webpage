import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';

class List extends Component {
  render() {
    return (
      <div style={{ height:'300px',  display:'flex', flexDirection:'row', padding:'8px' }}>
		    <Link to='/Product'>
          <Card title='Card title' style={{ width: 200, height: 284 }}>
            <p> title </p>
            <p> price </p>
          </Card>
        </Link>
	    </div>
    );
  }
}

export default List;
