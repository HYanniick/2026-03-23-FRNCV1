import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { IProduct } from "./src/interfaces/IProducts";
import ProductsListViewer from "./src/components/ui/ProductsListViewer/ProductsListViewer";

export default function App() {
  const [products, setProducts] = useState<Array<IProduct>>([]);
  useEffect(() => {
    fetch(
      `${process.env.EXPO_PUBLIC_API_URL}:${process.env.EXPO_PUBLIC_API_PORT}${
        process.env.EXPO_PUBLIC_API_ENDPOINT_PRODUCTS
      }`,
    )
      .then((r) => r.json())
      .then((a) => setProducts(a));
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <ProductsListViewer products={products}/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});