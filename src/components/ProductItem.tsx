import React from "react";
import {ProductsType} from '../types/types'

type Props = {
  productItem: ProductsType;
};

export default function ProductItem({ productItem }: Props) {
  return (<div>
    ProductItem
    <h1>Product: {productItem.title}</h1>
    <p>Price: {productItem.price}</p>
    <div>
      <img src={productItem.images[0]} alt="image" height="80px" />
    </div>


  </div>
  )
}
