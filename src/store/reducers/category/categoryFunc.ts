import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ICategory } from "../../../models/ICategory";

export const getCategories = createAsyncThunk(
  "category/upload",
  async function (_, thunkAPI) {
    try {
      const res = await axios.get<ICategory[]>(
        "http://localhost:8080/category/list"
      );
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить категории: " + e);
    }
  }
);
