import { View, Text } from "react-native";
import React from "react";
import ProductsSearcherUnconnected from "./ProductsSearcher";
import { connect, useDispatch, useSelector } from "react-redux";
import { updateSearch } from "../../../store/productsSlice";
type Props = {
  // onSearchChange:(search:string)=>void
};

const ProductsSearcher = (props: Props) => {
  const products = useSelector((s: any) => s.stock.products);
  const search = useSelector((s: any) => s.stock.search);
  const dispatch = useDispatch();
  return (
    <ProductsSearcherUnconnected
      {...props}
      onSearchChange={(searchFieldVal) => {
        dispatch(updateSearch(searchFieldVal));
      }}
      products={products}
      searchField={search}
    />
  );
};

export default ProductsSearcher;

function mapDispatchToProps(dispatch: Function) {
  return {
    onSearchChange:(str)=>dispatch(updateSearch(str))
  };
}
function mapStateToProps(props: Props, state: any) {
  return {
    ...props,
    products: state.stock.products,
    search: state.stock.search,
  };
}
export const ProductsSearcherNoHook = connect(mapStateToProps, mapDispatchToProps)(
  ProductsSearcherUnconnected,
);