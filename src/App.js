import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Router from './Router'
import Navi from './components/Navi';

class App extends Component {
  render() {
    return (
			<BrowserRouter>
				<div className="App" style={{width: '100%', height: '1600px'}}>
					<Navi />
					<Router />
				</div>
			</BrowserRouter>
	);
  }
}

export default App;
