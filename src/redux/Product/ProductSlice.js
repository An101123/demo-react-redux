import { createSlice } from "@reduxjs/toolkit";
import { ProductAsyncAction } from "./ProductAsyncAction";

const INITIAL_STATE = {
  data: [],
};
export const ProductSlice = createSlice({
  name: "products",
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    builder.addCase(
      ProductAsyncAction.getProducts.fulfilled,
      (state, { payload }) => {
        state.data = payload;
      }
    );
  },
});
