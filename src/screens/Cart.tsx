import React from 'react';
import { View } from 'react-native';
import Cart from '../components/ui/Cart/Cart.connected';

const CartScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Cart />
    </View>
  );
};

export default CartScreen;
