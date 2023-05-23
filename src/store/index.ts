import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todo-slice';
import RootState from './types';
const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
export default store;
