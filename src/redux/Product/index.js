import {ProductAsyncAction} from './ProductAsyncAction';
import {ProductSlice} from './ProductSlice';

const Product = {
  reducer: ProductSlice.reducer,
  actions: {
    ...ProductSlice.actions,
    ...ProductAsyncAction,
  },
};

export {Product}