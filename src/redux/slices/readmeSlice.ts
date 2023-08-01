import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  text: string;
}

const initialState: InitialState = {
  text: ""
}

const readmeSlice = createSlice({
  name: "readme",
  initialState,
  reducers: {
    setText: (state, action) => {
      state.text = action.payload
    }
  }
});

export const { setText } = readmeSlice.actions;
export default readmeSlice.reducer;

