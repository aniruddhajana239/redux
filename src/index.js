import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { DataStore } from './Store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={DataStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

