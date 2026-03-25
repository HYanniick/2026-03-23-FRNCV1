import { ScrollView, Text, View } from "react-native";
import React from "react";
import { IProduct } from "../../../interfaces/IProducts";
import CartItem from "./CartItem/CartItem";
import { styles } from "./Cart.styles";

type Props = {
  products: Array<IProduct>;
  onQuantChange:(p:IProduct,q:number)=>void
};

const Cart = ({ products , onQuantChange}: Props) => {
  const total = products.reduce((currentTotal, product) => {
    return currentTotal + product.prix * (product.quant ?? 1);
  }, 0);

  return (
    <View style={styles.container}>
      {products.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Votre panier est vide.</Text>
        </View>
      ) : (
        <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
          {products.map((p, i) => (
            <CartItem product={p} key={i} onQuantChange={onQuantChange} />
          ))}
        </ScrollView>
      )}
      <View style={styles.footer}>
        <Text style={styles.total}>
          Total <Text style={styles.totalValue}>{total.toFixed(2)} EUR</Text>
        </Text>
      </View>
    </View>
  );
};

export default Cart;
