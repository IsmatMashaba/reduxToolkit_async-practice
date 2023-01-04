import { AppDispatch } from "../Redux/Store";
import {ProductsType} from '../types/types'
import { productAction } from "../Redux/Slice/Product";
import { useDispatch } from "react-redux";
const url = "https://api.escuelajs.co/api/v1/products";

export function fetchProductsData() {
    return async (Dispatch: AppDispatch) => {
        const response = await fetch(url);
        const productdata = await response.json();

        Dispatch(productAction.getProdutdata(productdata));

    };
}
