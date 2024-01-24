import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./Slices/chatSlice";
import userDataReducer from "./Slices/userDataSlice";
import reportReducer from "./Slices/makingRepost";
import { composeWithDevToolsDevelopmentOnly } from "@redux-devtools/extension";

composeWithDevToolsDevelopmentOnly({
  realtime: true,
  port: 5173,
  hostname: "127.0.0.1",
});
export const store = configureStore({
  reducer: {
    chat: chatReducer,
    userData: userDataReducer,
    report: reportReducer,
  },
});
