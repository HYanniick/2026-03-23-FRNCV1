import { View, Text } from "react-native";
import React, { useState } from "react";
import { IProduct } from "../../../interfaces/IProducts";
import { styles } from "./ProductsListViewer.styles";
import ProductViewer from "../ProductViewer/ProductViewer";

interface IProductsListViewerProps {
  products: Array<IProduct>;
}

const ProductsListViewer = ({ products }: IProductsListViewerProps) => {
  return (
    <View style={styles.container}>
      {products.map((element) => {
        return <ProductViewer key={element.id} product={element} />;
      })}
    </View>
  );
};

export default ProductsListViewer;
