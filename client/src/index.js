import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import App from './react/App';

// Custom Style
import './sass/main.scss'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)

