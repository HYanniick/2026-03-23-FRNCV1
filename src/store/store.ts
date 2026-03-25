import { configureStore } from "@reduxjs/toolkit";
import productsReducer, { loadRestAPI } from "./productsSlice";
import cartReducer from "./cartSlice";
export const store=configureStore({
  reducer:{stock:productsReducer, cart:cartReducer}
})
store.subscribe(()=>console.trace(store.getState()))

store.dispatch(loadRestAPI())

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;