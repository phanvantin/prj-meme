

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom";
import store from './store'

import './services/posts'

// import './showcase/demo-redux'
// import './showcase/demo-timeout'
// import './showcase/demo-fetch'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

