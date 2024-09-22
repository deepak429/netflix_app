import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice'; // Import the reducer, not the slice itself

export const store = configureStore({
  reducer: {
    user: userReducer, // Use the reducer from the slice
  },
});
