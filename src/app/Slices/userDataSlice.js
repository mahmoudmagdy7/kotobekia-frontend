import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

// initialState value
const initialState = {
  userData: null,
};
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
  },
});

export default userData.reducer;

export const { getUserData, handleLoggedOut } = userData.actions;
