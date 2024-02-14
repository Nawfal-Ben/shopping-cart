import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products-slice";
import cartReducer from "./cart-slice"

export const store = configureStore({
   reducer: {
      products: productsReducer,
      cart: cartReducer
   },
});