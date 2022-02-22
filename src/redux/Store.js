import { configureStore } from '@reduxjs/toolkit';
import { phoneBookSlice } from "../redux/phoneBookSlice";

export const store = configureStore({
  reducer: {
    contacts: phoneBookSlice.reducer,
  },
});