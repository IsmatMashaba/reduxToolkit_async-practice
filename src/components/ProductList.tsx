import React from "react";

import { useSelector } from "react-redux";
import { fetchProductsData } from "../Thunk/product";
import { useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";
import ProductItem from "./ProductItem";

import { AppDispatch, RootState } from "../Redux/Store";

export default function ProductList() {
  const getdata = useSelector((state: RootState) => state.product.products);
  console.log(getdata, "data");
  const usedispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    usedispatch(fetchProductsData());
  }, [usedispatch]);
  return (
      <div>ProductList
        ProductList
        {getdata.map((products) => (
            <ProductItem key={crypto.randomUUID()} productItem={products} />
        ))}


      </div>
  )
}
