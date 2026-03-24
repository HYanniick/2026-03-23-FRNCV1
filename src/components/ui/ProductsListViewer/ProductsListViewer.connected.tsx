import { View, Text } from 'react-native'
import React from 'react'
import ProductsListViewerUnconnected from './ProductsListViewer'
import { useSelector, connect } from 'react-redux'
import { IProduct } from '../../../interfaces/IProducts'
type Props = {
    style?:any
}

const ProductsListViewer = (props: Props) => {
  const products =useSelector((s:any)=>s.stock.products)
  return (
    <ProductsListViewerUnconnected {...props} products={products}/>
  )
}

export default ProductsListViewer
/*************************
 * Old version without Hooks (react<16.8)
 */
function mapDispatchToProps(dispatch:Function){
    return {}
}
function mapStateToProps(props:Props,state:any){
    return {
        ...props,
        products:state.stock.products as Array<IProduct>
    }
}
export const ProductsListViewerNoHook=connect(mapStateToProps,mapDispatchToProps)( ProductsListViewerUnconnected)