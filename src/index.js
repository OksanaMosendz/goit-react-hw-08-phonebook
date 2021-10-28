import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { store, persistor } from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

// name:"oksana"
// email(pin):"oksana3@gmail.com"
// password:1234567

// name:"vika"
// email(pin):"vika03@gmail.com"
// password:1234567

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
