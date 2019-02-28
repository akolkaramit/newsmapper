import React from 'react';
import ReactDOM from 'react-dom';

// ****************************************************************************
// ********************************Import Files********************************
// ****************************************************************************
import './index.css';
import App from './App';


// ****************************************************************************
// ********************************Redux Store*********************************
// ****************************************************************************
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from './Redux/reducers.js';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk, logger)));


ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
, document.getElementById('root'));