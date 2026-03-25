import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../interfaces/IProducts";
interface ICartSliceState {
  products: Array<IProduct>;
}
const initialState: ICartSliceState = {
  products: [],
};

const CarSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct:(state, action:{type:string,payload:IProduct})=>{
        const pr:IProduct={...action.payload}
        const position=state.products.findIndex(p=>p.id===action.payload.id)
        if(-1===position){
            pr.quant=1
            state.products.push(pr)
        }
        else{
            const p=state.products[position]
            if(undefined!==p.quant)p.quant++
            else p.quant=2
        }
    },
    removeProduct: (s, action: { type: string; payload: IProduct }) => {
      const position = s.products.findIndex((p) => p === action.payload);
      if (position === -1) {
       return
      } else {
        if (s.products[position].quant !== undefined && s.products[position].quant>1)
          s.products[position].quant--
        else{
          const afterdelete=s.products.slice(position+1)
          s.products.splice(position)
          s.products.push(...afterdelete)
        }
      }
    },
  },
});

export const { addProduct, removeProduct } = CarSlice.actions;

const cartReducer = CarSlice.reducer;
export default cartReducer;
