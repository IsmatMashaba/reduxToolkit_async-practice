import { createSlice, PayloadAction } from "@reduxjs/toolkit";
/*import { act } from "@testing-library/react";
import { type } from "os";*/
import {ProductsType} from '../../types/types'

type initialState = {
    products: ProductsType[];
};
const initialState: initialState = {
    products: [],
};

const productSlice = createSlice({
    name: "ProductItem",
    initialState,
    reducers: {
        getProdutdata: (state, action) => {
            state.products = action.payload;
        },
    },
});
export const productAction = productSlice.actions;

const productReducer = productSlice.reducer;
export default productReducer
