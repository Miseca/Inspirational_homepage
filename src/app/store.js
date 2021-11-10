import { configureStore } from '@reduxjs/toolkit';
import goalsReducer from '../features/goals/goalsSlice';
import quotesReducer from '../features/quotes/quotesSlice';

export const store = configureStore({
  reducer: {
    goals: goalsReducer,
    quotes: quotesReducer,
  },
});
