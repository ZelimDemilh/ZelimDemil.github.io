import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from "@reduxjs/toolkit";
import CategorySlice from "./reducers/category/categorySlice";
import BasketSlice from "./reducers/basket/basketSlice"
import ProductsSlice from "./reducers/product/productSlice"

const rootReducer = combineReducers({
  CategorySlice,
  BasketSlice,
  ProductsSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;