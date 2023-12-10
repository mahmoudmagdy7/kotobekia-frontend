import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./Slices/chatSlice";

export const store = configureStore({
  reducer: {
    chat: chatReducer,
  },
});

/*

1- configure store 


*/
