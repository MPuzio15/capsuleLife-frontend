import {createSlice} from '@reduxjs/toolkit';

const itemSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    setItemsList: (state, action) => action.payload,
    addItem: (state, action) => {
      return [...state, action.payload];
    },
    setCompleted: (state, action) => {
      const list = state;
      const item = list.find((el) => el.id === action.payload);
      item.isCompleted = !item.isCompleted;
      return list;
    },
  },
});

export default itemSlice;
