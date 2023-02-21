import { createAsyncThunk } from "@reduxjs/toolkit";

const addToBasket = createAsyncThunk(
  "basket/add",
  async function (_, thunkAPI) {
    try {

    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить категории: " + e);
    }
  }
);