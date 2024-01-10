import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

export const makingReport = createAsyncThunk("makingReport", async (data , yourFeadBack) => {
  return await axios.get(
    `https://kotobekia-backend.onrender.com/api/v1/reports/report`,
    {
      report_type: "post",
      report_id: data.data.result._id,
      reported_user_id: data.data.result.createdBy,
      user_feedback: yourFeadBack.current.value,
    },
    {
      headers: {
        token: Cookies.get("userToken"),
      },
    }
  );
});

const reportSlice = createSlice({
  name: "report",
  initialState: { data: null },
  extraReducers: (builder) => {
    builder.addCase(makingReport.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default reportSlice.reducer;
