import React from "react";
import ProductsSearcherUnconnected from "./ProductsSearcher";
import { useDispatch, useSelector } from "react-redux";
import { updateSearch } from "../../../store/productsSlice";
import { AppDispatch, RootState } from "../../../store/store";


const ProductsSearcher = (props) => {
  const products = useSelector((s: RootState) => s.stock.products);
  const search = useSelector((s: RootState) => s.stock.search);
  const dispatch = useDispatch<AppDispatch>();
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