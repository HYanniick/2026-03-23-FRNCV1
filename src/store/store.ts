import { configureStore } from "@reduxjs/toolkit";
import productsReducer, { initialProductLoad } from "./productsSlice";
import {products} from '../../db.json'
export const store=configureStore({
  reducer:{stock:productsReducer}
})
store.subscribe(()=>console.trace(store.getState()))

store.dispatch(initialProductLoad(products))