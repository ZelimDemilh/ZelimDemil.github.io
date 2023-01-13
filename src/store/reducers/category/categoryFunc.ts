import { createAsyncThunk } from "@reduxjs/toolkit";
import { ICategory } from "../../../types/ICategory";
import { baseService } from "../../../api/api";

export const getCategories = createAsyncThunk(
  "category/upload",
  async function (_, thunkAPI) {
    try {
      const res = await baseService.get<ICategory[]>(
        "/category/list"
      );
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить категории: " + e);
    }
  }
);
