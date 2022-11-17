import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BasketState {
  basket: [];
  isLoading: boolean;
  error: string;
}

const initialState: BasketState = {
  basket: [],
  isLoading: false,
  error: "",
};

export const BasketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {},
  extraReducers: {},
});
export default BasketSlice.reducer;
