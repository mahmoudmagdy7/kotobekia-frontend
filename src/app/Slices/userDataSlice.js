import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import config from "../../../config";

// initialState value
const initialState = {
  userData: null,
  updatedUserData: null,
};

// get user data from the api

export const getUpdatedUserData = createAsyncThunk("user/getUpdatedUserData", async () => {
  try {
    const { data } = await axios(config.bseUrl + "/api/v1/user/my-profile", {
      headers: {
        token: Cookies.get("userToken"),
      },
    });
    console.log("user data");
    return data?.result;
  } catch (err) {
    console.log(err);
  }
});

const userData = createSlice({
  name: "user",
  initialState,
  reducers: {
    // remove cookies and making logout
    handleLoggedOut: (state) => {
      state.userData = null;
      Cookies.remove("userToken");
    },
    //Get data from token by JWTDecode
    getUserData: (state) => {
      state.userData = jwtDecode(Cookies.get("userToken"));
    },
    resetUserData: (state) => {
      state = initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUpdatedUserData.fulfilled, (state, action) => {
      state.updatedUserData = action.payload;
    });
  },
});

export default userData.reducer;

export const { getUserData, handleLoggedOut, resetUserData, updatedUserData } = userData.actions;
