import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  header: {
    title: string;
    description: string;

  }
}

const initialState: InitialState = {
  header: {
    title: "",
    description: "",
  }
}

const readmeSlice = createSlice({
  name: "readme",
  initialState,
  reducers: {
    setHeaderTitle: (state, action: PayloadAction<string>) => {
      state.header.title = action.payload;
    },
    setHeaderDescription: (state, action: PayloadAction<string>) => {
      state.header.description = action.payload;
    }
  }
});

export const { setHeaderTitle, setHeaderDescription } = readmeSlice.actions;
export default readmeSlice.reducer;

