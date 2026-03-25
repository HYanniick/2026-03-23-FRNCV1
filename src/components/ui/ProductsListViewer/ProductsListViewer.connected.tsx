import React from "react";
import ProductsListViewerUnconnected from "./ProductsListViewer";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { addProduct } from "../../../store/cartSlice";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../../navigation/types";

type Props = {
  style?: any;
};

const ProductsListViewer = (props: Props) => {
  const products = useSelector((s: RootState) => s.stock.filtredProducts);
  const dispatch = useDispatch<AppDispatch>();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <ProductsListViewerUnconnected
      {...props}
      products={products}
      onProductAddToCart={(product) => dispatch(addProduct(product))}
      onProductEdit={(product) =>
        navigation.navigate("productEditor", { product })
      }
    />
  );
};

export default ProductsListViewer;
