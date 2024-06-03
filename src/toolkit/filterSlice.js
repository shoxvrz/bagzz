// import { createSlice } from "@reduxjs/toolkit";
// import {productData} from '../hooks/UseGetData'

// const initialState = {
//   originalData: [],
//   filteredData: [],
// };

// const filterSlice = createSlice({
//   name: "filter",
//   initialState,
//   reducers: {
//     // saveDataToState: (state, {payload}) => {
//     //   state.originalData = payload;
//     //   state.filteredData = payload;
//     // },
//     // updateFilteredData: (state, action) => {
//     //   state.filteredData = action.payload;
//     // },

//     filterProducts(state, action){
//       const filter = productData.filter(
//         (product) => product.category === action.payload
//       );
//       state.filterProducts = filter;
//       console.log('filter', filter);
//       const saveState = JSON.stringify(filter);
//       sessionStorage.setItem('filteredData', saveState)
//     }
//   },

// });


// export const { saveDataToState, filterProducts } = filterSlice.actions;

// export default filterSlice.reducer;
