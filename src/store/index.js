import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./storeSlice/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
