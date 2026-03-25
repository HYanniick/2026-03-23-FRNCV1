import React from 'react'
import CiUnconnected from './CartIcon'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
type Props = {}

const CartIcon:React.FC<Props> = (props) => {
    const cartProducts=useSelector((s:RootState)=>s.cart.products)
    const calculateQuant=()=>{
        let total=0
        for (const product of cartProducts) {
            if(undefined!==product.quant)total+=product.quant
            else total+=1
        }
        return total
    }
  return (
    <CiUnconnected quantity={calculateQuant()}/>
    // <CiUnconnected quantity={cartProducts.length}/>
  )
}

export default CartIcon