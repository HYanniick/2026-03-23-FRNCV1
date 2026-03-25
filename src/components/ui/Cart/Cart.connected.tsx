import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartUnconnected from './Cart';
import type { IProduct } from '../../../interfaces/IProducts';
import { addProduct, removeProduct } from '../../../store/cartSlice';
import type { AppDispatch, RootState } from '../../../store/store';

const Cart = () => {
  const products = useSelector((state: RootState) => state.cart.products);
  const dispatch = useDispatch<AppDispatch>();

  const handleQuantChange = (product: IProduct, nextQuantity: number) => {
    const currentQuantity = product.quant ?? 1;

    if (nextQuantity > currentQuantity) {
      dispatch(addProduct(product));
      return;
    }

    if (nextQuantity < currentQuantity) {
      dispatch(removeProduct(product));
    }
  };

  return <CartUnconnected products={products} onQuantChange={handleQuantChange} />;
};

export default Cart;
