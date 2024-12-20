// features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const pageNameSlice = createSlice({
    name: 'pageName',
    initialState: {
        value: 'Home',
    },
    reducers: {
        changePageName: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { changePageName } = pageNameSlice.actions;
export default pageNameSlice.reducer;
