// store.js (or wherever you configure your Redux store)
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import favReducer from "./favItemsSlice"; 

export default configureStore({
  reducer: {
    cart: cartReducer,
    fav: favReducer, 
  },
});
