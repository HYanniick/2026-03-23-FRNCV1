import { configureStore } from "@reduxjs/toolkit";
import productsReducer, { initialProductLoad } from "./productsSlice";
export const store=configureStore({
  reducer:{stock:productsReducer}
})
store.subscribe(()=>console.trace(store.getState()))