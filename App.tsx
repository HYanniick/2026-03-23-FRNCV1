import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import { IProduct } from "./src/interfaces/IProducts";
import ProductsListViewer from "./src/components/ui/ProductsListViewer/ProductsListViewer";

export default function App() {
  const [products, setProducts] = useState<Array<IProduct>>([]);
  const [search, setSearch] = useState("");
  
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
      <TextInput
        style={styles.fieldFind}
        placeholder="Rechercher un produit..."
        placeholderTextColor={"grey"}
        value={search}
        onChangeText={setSearch}
      />

      <ScrollView>
        <ProductsListViewer products={products.filter((product) =>
          product.titre.toLowerCase().includes(search.toLowerCase())
        )}/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  fieldFind: {
    backgroundColor: "#fff",
    padding: 10,
    margin: 10,
    borderRadius: 5,
    fontSize: 16,
    borderColor: "#ccc",
    borderWidth: 1,
  },
});