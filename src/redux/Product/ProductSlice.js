import {createSlice} from  '@reduxjs/toolkit'
import { ProductAsyncAction } from './ProductAsyncAction';
   
const INITIAL_STATE = {
      products: [],
  };
export const ProductSlice = createSlice({
    name: 'products',
    initialState: INITIAL_STATE,
    extraReducers: (builder) => {
      builder.addCase(ProductAsyncAction.getProducts.fulfilled, (state, {payload}) => {
          console.log("payload", payload);
          state.products = [...payload];
      });
    },
});