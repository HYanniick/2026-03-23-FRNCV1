import { createSlice } from '@reduxjs/toolkit'
import { IProduct } from '../interfaces/IProducts';
interface IProductsSliceState{
    products:Array<IProduct>
    selectedProduct:undefined|IProduct
    search: string
}
const initialState:IProductsSliceState = {
    products:[],
    selectedProduct:undefined,
    search: ''
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
   initialProductLoad:(state,action:{type:string,payload:Array<IProduct>})=>{
    state.products.splice(0)
    state.products.push(...action.payload)
   }
  }
});

export const {initialProductLoad} = productsSlice.actions
const productsReducer= productsSlice.reducer
export default productsReducer