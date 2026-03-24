import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

export default function App() {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    fetch(
      `${process.env.EXPO_PUBLIC_API_BASE_URL}${process.env.EXPO_PUBLIC_API_ENDPOINT_PRODUCTS}`,
    )
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <View style={styles.container}>
      <Text>Products:</Text>
        <Text >{JSON.stringify(products)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
