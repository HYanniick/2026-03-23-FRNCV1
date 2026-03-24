import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
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
    <ScrollView style={{ height: Dimensions.get('window').height - 200}}>
      <View style={styles.container}>
        {products.map((product: IProduct) => (
          <ProductViewer key={product.id} product={product} />
        ))} 
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
