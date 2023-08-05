import {
  Image
} from "@/components/ImageDropzone/ImageDropzone";
import { ImageWithPosition, Positions } from "@/components/ImageDropzone/SmallImagreDropzone";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  header: {
    title: string;
    description: string;
    image: Image | null;
  };
  overview: {
    challenges: string;
    images: {
      1: Image | null;
      2: Image | null;
      3: Image | null;
    };
    links: string;
  };
};

const initialState: InitialState = {
  header: {
    title: "",
    description: "",
    image: null,
  },
  overview: {
    challenges: "",
    images: {
      1: null,
      2: null,
      3: null,
    },
    links: "",
  },
};

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
    setChallenges: (state, action: PayloadAction<string>) => {
      state.overview.challenges = action.payload;
    },
    setScreenshots: (
      state,
      action: PayloadAction<ImageWithPosition>
    ) => {
      const position = action.payload.position;
      state.overview.images[position] = action.payload.payload;
    },
    removeScreenshots: (state, action: PayloadAction<Positions>) => {
      state.overview.images[action.payload] = null;
    }
  },
});

export const {
  setHeaderTitle,
  setHeaderDescription,
  setHeaderImage,
  removeHeaderImage,
  setChallenges,
  setScreenshots,
  removeScreenshots
} = readmeSlice.actions;
export default readmeSlice.reducer;
