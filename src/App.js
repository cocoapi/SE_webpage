import React, { Component } from 'react';
import './App.css';
import First from './components/first'
import Second from './components/second'


class App extends Component {
  render() {
    return (
		<div className="App">
			<p> Hello, React! </p>
			<div style={{
				height: '20%',
			}}>
				<First />
			</div>
			<div style={{
				height: '20%',
			}}>
			<Second />
			</div>
		</div>
	);
  }
}

export default App;
