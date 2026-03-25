import { View, Text, TextInput, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { IProduct } from "../../../interfaces/IProducts";
import { styles } from "./ProductsSearcher.styles";
import ProductsListViewer from "../../ui/ProductsListViewer/ProductsListViewer";
import { store } from "../../../store/store";

interface IProductsSearcherProps {
  products: Array<IProduct>;
  searchField: string;
  onSearchChange: (newValue: string) => void;
}

const ProductsSearcher = ({
  products,
  searchField,
  onSearchChange,
}: IProductsSearcherProps) => {
  return (
    <>
      <TextInput
        style={styles.fieldFind}
        placeholder="Recherche"
        placeholderTextColor={"grey"}
        value={searchField}
        onChangeText={(str) => {
          //traitement sur la valeur avant remonté au parent
          onSearchChange(str);
        }}
      />
    </>
  );
};

export default ProductsSearcher;
