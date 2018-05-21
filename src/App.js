import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './App.css';
import Router from './Router';
import Navi from './components/Navi';
import SeApp from './reducer';

const store = createStore(
  SeApp,
  applyMiddleware(thunk),
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App" style={{ width: '100%', height: '1600px' }}>
            <Navi />
            <Router />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
