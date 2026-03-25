import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { style } from './CartIcon.styles';

interface ICartIconProps {
  quantity: number;
  onPress?: () => void;
}
const CartIcon = ({quantity, onPress}: ICartIconProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        source={require('../../../../assets/trolley.png')}
        style={style.icon}
      />
      {quantity > 0 && (
        <View style={style.cartIconContainer}>
          <Text style={style.quantity}>
            {quantity > 999 ? '999+' : quantity}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CartIcon;
