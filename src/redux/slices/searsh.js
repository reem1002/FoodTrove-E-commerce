import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        searchTerm: '',
        category: '',
    },
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
        setCategory: (state, action) => {
            state.category = action.payload;
        },
    },
});

export const { setSearchTerm, setCategory } = filterSlice.actions;
export default filterSlice.reducer;