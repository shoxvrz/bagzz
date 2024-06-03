import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favItems: [],
};

export const favItemsSlice = createSlice({
    name: 'fav',
    initialState,
    reducers: {
        addToFavItems: (state, action) => {
            const {id} = action.payload;
            const existingFavItem = state.favItems.find(item => item.id === id);
            if(existingFavItem){
                existingFavItem.qty + 0
            }else{
                state.favItems.push({...action.payload, qty:1})
            }
        },
        removeFavItems: (state, action) => {
            const {id} = action.payload;
            const favItemIndex = state.favItems.findIndex(item => item.id === id);
            if(favItemIndex !== -1){
                if(state.favItems[favItemIndex].qty === 1){
                    state.favItems.splice(favItemIndex, 1)
                }else{
                    state.favItems[favItemIndex].qty - 1;
                }
            }
        }
    },
});

export const { addToFavItems, removeFavItems } = favItemsSlice.actions; // Ensure that addToFavItems is exported
export default favItemsSlice.reducer;
