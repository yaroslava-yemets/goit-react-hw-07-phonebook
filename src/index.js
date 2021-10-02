import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from 'redux/store';
import * as fetch from './services/contactsApi';

// console.log('contacts');
// fetch.fetchContacts();
// fetch.addContact();
// fetch.deleteContact('8qNuWuobP');

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
