import {createSlice} from '@reduxjs/toolkit';

const deleteListSlice = createSlice({
  name: 'deleteList',
  initialState: [],
  reducers: {
    setDeleteListEmpty: () => [],
    setItemToDelete: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export default deleteListSlice;
