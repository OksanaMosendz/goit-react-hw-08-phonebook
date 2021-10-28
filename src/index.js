import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// name:"oksana"
// email(pin):"oksana3@gmail.com"
// password:1234567

// name:"vika"
// email(pin):"vika03@gmail.com"
// password:1234567

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
