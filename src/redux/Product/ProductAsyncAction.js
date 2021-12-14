import {createAsyncThunk} from '@reduxjs/toolkit';
import {ProductServices} from '../../services/ProductService';

const getProducts = createAsyncThunk('products/getProducts', () => {
  return ProductServices.getProducts();
});

export const ProductAsyncAction = {
    getProducts
};
