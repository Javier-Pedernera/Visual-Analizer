import { configureStore } from '@reduxjs/toolkit';
import imageReducer from '../Actions/ImageSlice';

export const store = configureStore({
  reducer: {
    image: imageReducer,
  },
});