import React, { Component } from 'react';
import './App.css';
import Navi from './components/Navi';
import List from './components/List';
import Ads from './components/Ads';

class App extends Component {
  render() {
    return (
		<div className="App" style={{width: '100%', height: '1600px'}}>
			<Navi />
			<Ads />
			<List />
			<List />
		</div>
	);
  }
}

export default App;
