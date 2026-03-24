import {
  Button,
  Image,
  Text,
  View,
} from "react-native";
import React from "react";
import { IProduct } from "../../../interfaces/IProducts";
import styles from "./ProductViewer.styles";

interface IProductViewerProps {
  product: IProduct;
}

const ProductViewer = ({ product }: IProductViewerProps) => {
  return (
    <View style={styles.ProductViewer}>
      <Text style={[styles.title, styles.bold]}>{product.titre}</Text>
      <View style={styles.colsFlex}>
        <View style={styles.colLeft}>
          {undefined !== product.stock && product.stock > 0 ? (
            <Text style={styles.stock}>
              stock:<Text style={styles.bold}>{product.stock}</Text>
            </Text>
          ) : (
            <Text style={styles.indisponible}>Indisponible</Text>
          )}
          <Text style={styles.description}>Description :</Text>
          <Text style={styles.description}>{product.description}</Text>
          <Text style={styles.prix}>Prix:{product.prix}</Text>
        </View>
        <View style={styles.colRight}>
          <Image style={styles.image} source={{ uri: product.imageUrl }} />
          <Button title="Edition" />
        </View>
      </View>
    </View>
  );
};

export default ProductViewer;