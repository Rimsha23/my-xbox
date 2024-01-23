// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import todoSlice from '../src/components/redux/todoSlice';

const store = configureStore({
  reducer: {
    todos: todoSlice,
  },
});

export default store;
