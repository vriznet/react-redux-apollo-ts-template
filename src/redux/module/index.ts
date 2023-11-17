import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import bookReducer from './bookSlice';

export const rootReducer = combineReducers({
  counter: counterReducer,
  book: bookReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
