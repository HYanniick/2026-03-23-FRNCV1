import { View, Text } from "react-native";
import React, { useState } from "react";
import { IProduct } from "../../../interfaces/IProducts";
import { styles } from "./ProductsListViewer.styles";
import ProductViewer from "../ProductViewer/ProductViewer";

interface IProductsListViewerProps {
  products: Array<IProduct>;
  onProductAddToCart?: (p: IProduct) => void;
}

const ProductsListViewer = ({ products, onProductAddToCart }: IProductsListViewerProps) => {
  return (
    <View style={styles.container}>
      {products.map((element) => {
        return <ProductViewer key={element.id} product={element} onProductAddToCart={onProductAddToCart} />;
      })}
    </View>
  );
};

export default ProductsListViewer;
