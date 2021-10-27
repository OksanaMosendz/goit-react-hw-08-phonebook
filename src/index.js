import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// import { registerUser, loginUser } from './services/auth-API';

// registerUser({
//   name: 'Oksana',
//   email: 'acros55s@mail.com',
//   password: 'example',
// });

// loginUser({
//   email: 'acros55s@mail.com',
//   password: 'example',
// });

// registerUser({
//   name: '2222',
//   email: 'acrobat@mail.com',
//   password: 'oksanaoksana',
// });

// loginUser({
//   email: 'acros55s@mail.com',
//   password: 'example',
// });

// registerUser({
//   name: '1234',
//   email: 'acrobat1234@mail.com',
//   password: 'name12345678',
// });

// {"user":{"name":"1234","email":"acrobat1234@mail.com"},
// "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTc4NjQ2N2EyNzc0ZDAwMTVmNjY1YjkiLCJpYXQiOjE2MzUyNzk5NzV9.GnDZ9j8iIBOCAGQZ2hRJhTzjYOUiNVX9tlQaWb5RWoY"};

// name:"oksana"
// email(pin):"oksana3@gmail.com"

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
