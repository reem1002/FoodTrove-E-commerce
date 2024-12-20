import { combineReducers } from '@reduxjs/toolkit';
import pageNameReducer from './slices/pageNameSlice';
import productSlice from './slices/productSlice';
import cartSlice from './slices/cart';
import favSlice from './slices/favSlice';
import checkoutReducer from './slices/checkoutSlice';
import filterSlice from './slices/searsh';

const rootReducer = combineReducers({
    pageName: pageNameReducer,
    product: productSlice,
    cart: cartSlice,
    fav: favSlice,
    checkout: checkoutReducer,
    filter: filterSlice,
});

export default rootReducer;
