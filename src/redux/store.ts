import { configureStore } from "@reduxjs/toolkit";
import readmeSlice from "./slices/readmeSlice";

export const store = configureStore({
  reducer: {
    readme: readmeSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;