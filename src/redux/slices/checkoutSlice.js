import { createSlice } from "@reduxjs/toolkit";

export const checkoutSlice = createSlice({
    name: "checkout",
    initialState: {
        products: [],
    },
    reducers: {
        setCheckoutProducts: (state, action) => {
            state.products = action.payload; // Set the checkout products
        },
        clearCheckoutProducts: (state) => {
            state.products = []; // Clear the products after checkout
        },
    },
});

export const { setCheckoutProducts, clearCheckoutProducts } = checkoutSlice.actions;
export default checkoutSlice.reducer;
