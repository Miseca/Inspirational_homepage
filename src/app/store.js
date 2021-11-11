import { configureStore } from '@reduxjs/toolkit';
import goalsReducer from '../features/goals/goalsSlice';
import quotesReducer from '../features/quotes/quotesSlice';
import inspirationalBackgroundsReducer from '../features/inspirationalBackground/inspirationalBackgroundSlices';
import weatherReducer from '../features/weather/weatherSlice';

export const store = configureStore({
  reducer: {
    goals: goalsReducer,
    quotes: quotesReducer,
    inspirationalBackgrounds: inspirationalBackgroundsReducer,
    weather: weatherReducer,
  },
});
