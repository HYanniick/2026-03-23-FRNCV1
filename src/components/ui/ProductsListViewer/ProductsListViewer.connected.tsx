import React from 'react'
import ProductsListViewerUnconnected from './ProductsListViewer'
import { useSelector, connect } from 'react-redux'
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