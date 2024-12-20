import { createSlice } from '@reduxjs/toolkit';

export const favSlice = createSlice({
    name: 'fav',
    initialState: {
        value: [],
    },
    reducers: {
        addToFav: (state, action) => {
            state.value.push(action.payload);
        },
        removeFromFav: (state, action) => {
            state.value = state.value.filter((item) => item.id !== action.payload);
        },
    },
});

export const { addToFav, removeFromFav } = favSlice.actions;
export default favSlice.reducer;