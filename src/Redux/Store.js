import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import homeVideoReducer from "./features/homeVideoSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    homeVideo: homeVideoReducer,
  },
});
