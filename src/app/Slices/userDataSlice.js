import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: null,
};
const userData = createSlice({
  name: "user",
  initialState,
  reducers: {
    getDataFromToken: (state, { payload }) => {
      state.value = payload;
    },
  },
});

export default userData.reducer;

export const { getDataFromToken } = userData.actions;
