import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../../../config";

export const getCategory = createAsyncThunk("getCategory", async (id, page) => {
  return axios.get(
    `${config.bseUrl}/api/v1/levels/specific/${id}?page=${page}`
  );
});

const category = createSlice({
  name: "category",
  initialState: {
    value: null,
  },
  extraReducers: ({ addCase }) => {
    addCase(getCategory.fulfilled, (state, { payload }) => {
      state.value = payload;
    });
  },
});

export default category.reducer;
