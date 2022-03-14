import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../store/index';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
