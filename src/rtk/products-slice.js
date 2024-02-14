import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
   "products/fetchProducts",
   async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      return res.json();
   }
);

const productsSlice = createSlice({
   initialState: [],
   name: "products",
   extraReducers: (builder) => {
      builder.addCase(fetchProducts.fulfilled, (state, action) => {
         return action.payload
      });
   },
});

export default productsSlice.reducer;