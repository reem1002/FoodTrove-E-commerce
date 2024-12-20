import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        value: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.value.find((item) => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.value.push({ ...action.payload, quantity: 1 });
            }
        },
        updateCart: (state, action) => {
            const index = state.value.findIndex(item => item.id === action.payload.id );
            if (index >= 0) {
                state.value[index] = action.payload; // Update the existing product
            }
        },
        removeFromCart: (state, action) => {
            state.value = state.value.filter((item) => item.id !== action.payload);
        },
        incrementQuantity: (state, action) => {
            const item = state.value.find((item) => item.id === action.payload);
            if (item) item.quantity += 1;
        },
        decrementQuantity: (state, action) => {
            const item = state.value.find((item) => item.id === action.payload);
            if (item && item.quantity > 1) item.quantity -= 1;
        },
    },
});

export const { addToCart, updateCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
