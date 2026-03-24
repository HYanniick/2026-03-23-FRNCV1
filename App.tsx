import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import ProductsListViewer from "./src/components/ui/ProductsListViewer/ProductsListViewer.connected";
import {store} from './src/store/store'
import { Provider } from "react-redux";
import Banner from "./src/components/ui/Banner/Banner";
import ProductsSearcher from "./src/components/functionnal/ProductsSearcher/ProductsSearcher.connected";
export default function App() {
  console.log(store);
  const [search, setSearch] = useState("");
  return (
    <Provider store={store}>
      <View style={{ flex: 1, }}>
        <Banner/>
        <ProductsSearcher
          onSearchChange={(str) => {
            setSearch(str);
          }}
        />
        <ScrollView>
          <ProductsListViewer/>
        </ScrollView>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({});