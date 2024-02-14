import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
   initialState: [],
   name: "cart",
   reducers: {
      addToCart: (state, action) => {
         const existingProduct = state.find(
            (product) => product.id === action.payload.id
         );

         if (existingProduct) {
            // If product already exists, increment quantity
            existingProduct.quantity += 1;
         } else {
            // If product doesn't exist, add with quantity 1
            state.push({ ...action.payload, quantity: 1 });
         }
      },
      removeFromCart: (state, action) => {
         return state.filter((product) => product.id !== action.payload);
      },
      clearCart: (state, action) => {
         return []
      },
      changeQuantity: (state, action) => {
         const existingProduct = state.find(
            (product) => product.id === action.payload.id
         );
         if (action.payload.incrementQuantity && existingProduct.quantity >= 1) {
            existingProduct.quantity += 1;
         } else if (!action.payload.incrementQuantity && existingProduct.quantity >= 2) {
            existingProduct.quantity -= 1;
         }
      }
   },
});

export const { addToCart, removeFromCart, changeQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
