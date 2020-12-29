import { createSlice } from '@reduxjs/toolkit';

const itemSlice = createSlice({
    name: 'items',
    initialState: [],
    reducers: {
        setItemsList: (state, action) => action.payload,
    },

});

export default itemSlice;
