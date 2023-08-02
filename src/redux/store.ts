import { configureStore } from "@reduxjs/toolkit";
import readmeReducer from "./slices/readmeSlice";

export const store = configureStore({
  reducer: {
    readme: readmeReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;