import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./Slices/chatSlice";
import userDataReducer from "./Slices/userDataSlice";
import categoryReducer from "./Slices/categorySlice";
export const store = configureStore({
  reducer: {
    chat: chatReducer,
    userData: userDataReducer,
    category: categoryReducer,
  },
});
