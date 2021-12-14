import { configureStore } from "@reduxjs/toolkit";
import { Product } from "./Product";

const store = configureStore({
    reducer: {
        products:  Product.reducer,
    }
})

export default store