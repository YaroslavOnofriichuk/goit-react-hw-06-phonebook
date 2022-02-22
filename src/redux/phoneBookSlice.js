import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  filter: ''
};

export const phoneBookSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items.push(action.payload);
    },
    deleteItems(state, action) {
      state.items = state.items.filter(contact => contact.id !== action.payload);
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { setItems, setFilter, deleteItems } = phoneBookSlice.actions;