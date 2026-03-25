import React from 'react'
import CiUnconnected from './CartIcon'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import type { RootStackParamList } from '../../../navigation/types'
import { RootState } from '../../../store/store'
type Props = {}

const CartIcon:React.FC<Props> = (props) => {
    const nav = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
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
    <CiUnconnected quantity={calculateQuant()} onPress={() => nav.navigate('cart')}/>
    // <CiUnconnected quantity={cartProducts.length}/>
  )
}

export default CartIcon
