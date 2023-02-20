import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getProducts } from "./productFunc";
import { IProduct } from "../../../types/IProduct";

interface ProductState {
  products: IProduct[];
  isLoading: boolean;
  error: string;
}

const initialState: ProductState = {
  products: [],
  isLoading: false,
  error: "",
};

export const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(
      getProducts.fulfilled,
      (state, action: PayloadAction<IProduct[]>) => {
        state.products = action.payload;
        state.isLoading = false;
        state.error = "";
      }
    );

    // builder.addCase(getProducts.rejected, (state, action: string) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // })
  },
});
export default ProductSlice.reducer;
