import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/todoList/todoSlice'

export const store = configureStore({
  reducer: {
   todos: todosReducer
  },
});
