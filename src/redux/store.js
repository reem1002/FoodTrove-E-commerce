import { configureStore } from '@reduxjs/toolkit';
import pageNameReducer from './slices/pageNameSlice';
import productSlice from './slices/productSlice';
import cartSlice from './slices/cart';
import favSlice from './slices/favSlice';
import checkoutReducer from './slices/checkoutSlice';


const store = configureStore({
    reducer: {

        pageName: pageNameReducer,
        product: productSlice,
        cart: cartSlice,
        fav: favSlice,
        checkout: checkoutReducer,

    },
});

export default store;