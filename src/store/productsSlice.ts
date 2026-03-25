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
      syncFilteredProducts(state);
    },
    initialProductLoad: (
      state,
      action: { type: string; payload: Array<IProduct> },
    ) => {
      state.products.splice(0);
      state.products.push(...action.payload);
      syncFilteredProducts(state);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadRestAPI.fulfilled, (state, action) => {
      state.products.push(...action.payload);
      state.search = "";
      syncFilteredProducts(state);
    });
    builder.addCase(saveProductAPI.fulfilled, (state, action) => {
      upsertProduct(state.products, action.payload);
      state.selectedProduct = action.payload;
      syncFilteredProducts(state);
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

export const saveProductAPI = createAsyncThunk(
  "products/saveAPI",
  async (product: IProduct) => {
    const baseUrl = `${process.env.EXPO_PUBLIC_API_BASE_URL}${process.env.EXPO_PUBLIC_API_ENDPOINT_PRODUCTS}`;
    const isEdition = product.id !== undefined;
    const response = await fetch(isEdition ? `${baseUrl}/${product.id}` : baseUrl, {
      method: isEdition ? "PUT" : "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    if (!response.ok) {
      throw new Error("Impossible d'enregistrer le produit");
    }

    const data = await response.json();
    return data as IProduct;
  },
);

const syncFilteredProducts = (state: IProductsSliceState) => {
  if (state.search.trim().length === 0) {
    state.filtredProducts = [...state.products];
    return;
  }

  state.filtredProducts = state.products.filter((product) =>
    product.titre.toLowerCase().includes(state.search.toLowerCase()),
  );
};

const upsertProduct = (products: Array<IProduct>, product: IProduct) => {
  const index = products.findIndex((currentProduct) => currentProduct.id === product.id);

  if (index === -1) {
    products.unshift(product);
    return;
  }

  products[index] = product;
};

