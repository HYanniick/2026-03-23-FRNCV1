import { Button, Image, Text, View } from "react-native";
import React from "react";
import { IProduct } from "../../../../interfaces/IProducts";
import { styles } from "./CartItem.styles";

type Props = {
  product: IProduct;
  onQuantChange: (p: IProduct,q: number) => void;
};

const CartItem = ({ product, onQuantChange }: Props) => {
  return (
    <View style={styles.CartItem}>
      <Image style={styles.img} source={{ uri: product.thumbnailUrl }} />
      <View style={styles.central}>
      <View style={styles.centralText}>
        <Text style={styles.titre}>{product.titre}</Text>
        <Text style={styles.center}>
   	          Prix:{product.prix.toFixed(2)} X{" "}
	          {product.quant ?? 1}
        </Text>
      </View>
      <View style={styles.buttons}>
        <Button title=" - " color={'tomato'} onPress={()=>{
            onQuantChange(product,undefined!==product.quant?product.quant-1:0)
        }}/>
        <Button title=" + " color={'skyblue'} onPress={()=>{
             onQuantChange(product,undefined!==product.quant?product.quant+1:1)
        }}/>
      </View>
      </View>
      <View style={styles.total}>
        <Text style={styles.totalValue}>
	          {(
            Number(product.prix.toFixed(2)) *
            Number(product.quant ?? 1)
          ).toFixed(2)}
        </Text>
      </View>
    </View>
  );
};

export default CartItem;
