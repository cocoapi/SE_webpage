import React, { Component } from 'react';
import First from './front'
import Second from './second'

class Front extends Component {
  render() {
    return (
      <div>
		<p> Hello, React! </p>
			<First />
			<Second />
	  </div>
    );
  }
}

export default Front;
