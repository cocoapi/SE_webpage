import React, { Component } from 'react';
import './App.css';
import First from './components/first'
import Second from './components/second'


class App extends Component {
  render() {
    return (
		<div className="App" style={{width: '1000px', height: '800px'}}>
			<p> Hello, React! </p>
			<div style={{
				width:'100%',
				textAlign: 'center',
			}}>
				<First />
			</div>
			<div style={{
				width: '100%',
				textAlign: 'center',
			}}>
			<Second />
			</div>
		</div>
	);
  }
}

export default App;
