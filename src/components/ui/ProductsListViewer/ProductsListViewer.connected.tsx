import React from 'react'
import ProductsListViewerUnconnected from './ProductsListViewer'
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch, RootState } from '../../../store/store'
import { addProduct } from '../../../store/cartSlice'

type Props = {
    style?:any
}

const ProductsListViewer = (props: Props) => {
  const products =useSelector((s:RootState)=>s.stock.filtredProducts)
  const dispatch = useDispatch<AppDispatch>();
  return (
    <ProductsListViewerUnconnected
      {...props}
      products={products}
      onProductAddToCart={(product) => dispatch(addProduct(product))}
    />
  )
}

export default ProductsListViewer
