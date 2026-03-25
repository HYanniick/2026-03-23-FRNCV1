import { ScrollView, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { IProduct } from "../../../interfaces/IProducts";
import CartItem from "./CartItem/CartItem";
import { styles } from "./Cart.styles";

type Props = {
  products: Array<IProduct>;
  onQuantChange:(p:IProduct,q:number)=>void
};

const Cart = ({ products , onQuantChange}: Props) => {
  const [total, setTotal] = useState(0.0);
  useEffect(()=>{
    let total=0
    for (const element of products) {
        total+=element.prix*(undefined!==element.quant?element.quant:1)
    }
    setTotal(total)
  },[products])
  return (
    <View>
      <Text style={styles.header}>Cart</Text>
      <ScrollView style={styles.scroll}>
      {products.map((p, i) => (
        <CartItem product={p} key={i} onQuantChange={onQuantChange} />
      ))}
      </ScrollView>
      <Text style={styles.total}>
        Total<Text style={styles.totalValue}>{total.toFixed(2)}</Text>
      </Text>
    </View>
  );
};

export default Cart;