import { Image } from "@/components/ImageDropzone/ImageDropzone";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  header: {
    title: string;
    description: string;
    image: Image | null;
  }
}

const initialState: InitialState = {
  header: {
    title: "",
    description: "",
    image: null
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
    },
    // Non-serializable value being used: Image
    setHeaderImage: (state, action: PayloadAction<Image>) => { 
      state.header.image = action.payload;
    },
    removeHeaderImage: (state) => { 
      state.header.image = null;
    },
  }
});

export const { setHeaderTitle, setHeaderDescription, setHeaderImage, removeHeaderImage } = readmeSlice.actions;
export default readmeSlice.reducer;
