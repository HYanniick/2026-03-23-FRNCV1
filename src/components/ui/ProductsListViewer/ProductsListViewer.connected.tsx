import { View, Text } from 'react-native'
import React from 'react'
import ProductsListViewerUnconnected from './ProductsListViewer'
import { useSelector, connect } from 'react-redux'
import { IProduct } from '../../../interfaces/IProducts'
import { AppDispatch, RootState } from '../../../store/store'
type Props = {
    style?:any
}

const ProductsListViewer = (props: Props) => {
  const products =useSelector((s:RootState)=>s.stock.filtredProducts)
  return (
    <ProductsListViewerUnconnected {...props} products={products}/>
  )
}

export default ProductsListViewer
/*************************
 * Old version without Hooks (react<16.8)
 */
function mapDispatchToProps(dispatch:AppDispatch){
    return {}
}
function mapStateToProps(props:Props,state:RootState){
    return {
        ...props,
        products:state.stock.products as Array<IProduct>
    }
}
export const ProductsListViewerNoHook=connect(mapStateToProps,mapDispatchToProps)( ProductsListViewerUnconnected)
