import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import SeApp from './reducer';

const store = createStore(
	SeApp,
	applyMiddleware(thunk)
)

ReactDOM.render(
	<Provider store = {store}>
		<App />
	</Provider>, 
	document.getElementById('root'));
registerServiceWorker();
