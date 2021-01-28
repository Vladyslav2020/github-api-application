import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { App } from './App';
import { rootReducer } from './redux/rootReducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

//reportWebVitals(console.log);