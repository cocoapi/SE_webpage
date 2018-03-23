import React, { Component } from 'react';
import '../App.css';
import First from './front'
import Second from './second'

class Front extends Component {
  render() {
    return (
      <div className="App" style={{ display: 'flex', flexDirection: 'row'}}>
		<p> Hello, React! </p>
		<div style={{ height: '20%' }}>
			<First />
		</div>
		<div style={{ height: '20%' }}>
			<Second />
		</div>
	  </div>
    );
  }
}

export default Front;
