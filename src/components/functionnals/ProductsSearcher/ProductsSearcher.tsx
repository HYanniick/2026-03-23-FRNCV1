import { TextInput } from "react-native";
import React from "react";
import { IProduct } from "../../../interfaces/IProducts";
import { styles } from "./ProductsSearcher.styles";

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
          onSearchChange(str);
        }}
      />
    </>
  );
};

export default ProductsSearcher;
