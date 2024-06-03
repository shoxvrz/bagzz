// store.js (or wherever you configure your Redux store)
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import favReducer from "./favItemsSlice"; 
// import filterReducer from './filterSlice';

export default configureStore({
  reducer: {
    cart: cartReducer,
    fav: favReducer, 
    // filter: filterReducer
  },
});
