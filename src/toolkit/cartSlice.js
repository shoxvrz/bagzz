
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.cartItems.find(item => item.id === id);
      if (existingItem) {
        existingItem.qty += 1;
      } else {
        state.cartItems.push({ ...action.payload, qty: 1 });
      }
    },
    removeCart: (state, action) => {
      const {id} = action.payload;
      const existingItemIndex = state.cartItems.findIndex(item => item.id === id)
      if(existingItemIndex !== -1){
        if(state.cartItems[existingItemIndex].qty === 1){
          state.cartItems.splice(existingItemIndex, 1)
        }else{
          state.cartItems[existingItemIndex].qty -= 1;
      }
      }
    }
  },
});

export const { addToCart, removeCart } = cartSlice.actions;

export default cartSlice.reducer;
