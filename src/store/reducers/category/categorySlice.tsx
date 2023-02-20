import { ICategory } from "../../../types/ICategory";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCategories } from "./categoryFunc";

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
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(
      getCategories.fulfilled,
      (state, action: PayloadAction<ICategory[]>) => {
        state.categories = action.payload;
        state.isLoading = false;
        state.error = "";
      }
    );

    // builder.addCase(getCategories.rejected, (state, action: PayloadAction<string>) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // })
  },
});
export default CategorySlice.reducer;
