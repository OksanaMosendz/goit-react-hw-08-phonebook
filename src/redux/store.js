import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './phonebook/phonebook-reducers';
import { authReducer } from './auth/auth-reducers';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: authReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});
