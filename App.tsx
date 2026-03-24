import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import ProductViewer from "./src/ProductViewer/ProductViewer";
import { IProduct } from "./src/interfaces/IProducts";

export default function App() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    fetch(
      `${process.env.EXPO_PUBLIC_API_BASE_URL}${process.env.EXPO_PUBLIC_API_ENDPOINT_PRODUCTS}`,
    )
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <View style={styles.container}>
      {products.map((product: IProduct) => (
        <ProductViewer key={product.id} product={product} />
      ))} 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    overflow: 'scroll',
    gap: 20,
    padding: 10,
  },
});
