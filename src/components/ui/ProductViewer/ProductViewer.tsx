import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { IProduct } from "../../../interfaces/IProducts";
import { styles } from "./ProductViewer.styles";

interface IProductViewerProps {
  product: IProduct;
  onProductAddToCart?: (p: IProduct) => void;
}

const ProductViewer = ({ product, onProductAddToCart }: IProductViewerProps) => {
  return (
    <View style={styles.ProductViewer}>
      <Text style={[styles.titre, styles.bold]}>{product.titre}</Text>
      <View style={styles.colsFlex}>
        <View style={styles.colLeft}>
          {undefined !== product.stock && product.stock > 0 ? (
            <Text style={styles.stock}>
              stock:<Text style={styles.bold}>{product.stock}</Text>
            </Text>
          ) : (
            <Text style={styles.indisponible}>Indisponible</Text>
          )}
          <Text style={styles.descriptionLabel}>Description :</Text>
          <Text style={styles.description}>{product.description}</Text>
          <Text style={styles.prix}>Prix:{product.prix}</Text>
        </View>
        <View style={styles.colRight}>
          <Image style={styles.image} source={{ uri: product.imageUrl }} />
          <Button title="Ajouter au panier" onPress={() => product && onProductAddToCart && onProductAddToCart(product)} />
        </View>
      </View>
    </View>
  );
};

export default ProductViewer;

