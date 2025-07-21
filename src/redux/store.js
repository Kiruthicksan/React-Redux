import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducer.js';

const store = configureStore({
  reducer: {
    users: userReducer,
  },
});

export default store;
