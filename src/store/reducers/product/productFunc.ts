import { createAsyncThunk } from "@reduxjs/toolkit";
import { IProduct } from "../../../types/IProduct";
import { baseService } from "../../../api/api";

export const getProducts = createAsyncThunk(
  "product/upload",
  async function (_, thunkAPI) {
    try {
      const res = await baseService.get<IProduct[]>(
        "/products/list"
      );
      // if ([400, 404, 401].includes(res.status) ){
      //   thunkAPI.rejectWithValue(res.data)
      // }
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить продукты: " + e);
    }
  }
);
