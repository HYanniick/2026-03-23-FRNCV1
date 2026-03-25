import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../interfaces/IProducts";
export interface IProductsSliceState {
  products: Array<IProduct>;
  selectedProduct: undefined | IProduct;
  filtredProducts: Array<IProduct>;
  search: string;
}
const initialState: IProductsSliceState = {
  products: [],
  filtredProducts: [],
  selectedProduct: undefined,
  search: "",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    searchByBarCode: (state, action: { type: string; payload: string }) => {
      const p = state.products.find((p) => p.barCode === action.payload);
      if (p) {
        state.filtredProducts = [p];
      }
    },
    updateSearch: (state, action: { type: string; payload: string }) => {
      state.search = action.payload;
      state.filtredProducts = state.products.filter((p) =>
        p.titre.toLowerCase().includes(action.payload.toLowerCase()),
      );
    },
    initialProductLoad: (
      state,
      action: { type: string; payload: Array<IProduct> },
    ) => {
      state.products.splice(0);
      state.products.push(...action.payload);
      state.filtredProducts = state.products;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadRestAPI.fulfilled, (state, action) => {
      state.products.push(...action.payload);
      state.filtredProducts = state.products;
      state.search = "";
    });
  },
});

export const { initialProductLoad, updateSearch, searchByBarCode } = productsSlice.actions;
const productsReducer = productsSlice.reducer;
export default productsReducer;

export const loadRestAPI = createAsyncThunk("products/loadAPI", async () => {
  const response = await fetch(
    `${process.env.EXPO_PUBLIC_API_BASE_URL}${process.env.EXPO_PUBLIC_API_ENDPOINT_PRODUCTS}`,
  );
  const data = await response.json();
  return data;
});
