import { ICategory } from "../../../models/ICategory";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCategories } from "./categoryFunc";
import axios from "axios";

interface CategoryState {
  categories: ICategory[];
  isLoading: boolean;
  error: string;
}

const initialState: CategoryState = {
  categories: [],
  isLoading: false,
  error: "",
};

export const CategorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: {
    [getCategories.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getCategories.fulfilled.type]: (
      state,
      action: PayloadAction<ICategory[]>
    ) => {
      state.categories = action.payload;
      state.isLoading = false;
      state.error = "";
    },
    [getCategories.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export default CategorySlice.reducer;
