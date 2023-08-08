import {
  Image
} from "@/components/ImageDropzone/ImageDropzone";
import { ImageWithPosition, Positions } from "@/components/ImageDropzone/SmallImageDropzone";
import { Item } from "@/components/ListItem/ListItem";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  header: {
    title: string;
    description: string;
    image: Image | null;
  },
  overview: {
    challenges: string;
    images: {
      1: Image | null;
      2: Image | null;
      3: Image | null;
    };
    links: string;
  },
  process: {
    developedWith: string[];
    whatILearned: string;
    usefulResources: Item[];
  },
  author: {
    socials: Item[];
  }
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
  process: {
    developedWith: [],
    whatILearned: "",
    usefulResources: []
  },
  author: {
    socials: []
  }
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
    },
    setLinks: (state, action: PayloadAction<string>) => {
      state.overview.links = action.payload;
    },
    setDevelopedWith: (state, action: PayloadAction<string[]>) => {
      state.process.developedWith = action.payload;  
    },
    setWhatILearned: (state, action: PayloadAction<string>) => {
      state.process.whatILearned = action.payload;
    },
    addUsefulResourcesItem: (state, action: PayloadAction<Item>) => {
      state.process.usefulResources.push(action.payload);
    },
    removeUsefulResourcesItem: (state, action: PayloadAction<string>) => {
      const newItems = state.process.usefulResources.filter(item => item.id !== action.payload);
      state.process.usefulResources = newItems;
    },
    addSocialsItem: (state, action: PayloadAction<Item>) => {
      state.author.socials.push(action.payload);
    },
    removeSocialsItem: (state, action: PayloadAction<string>) => {
      const newItems = state.author.socials.filter(item => item.id != action.payload);
      state.author.socials = newItems;
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
  removeScreenshots,
  setLinks,
  setDevelopedWith,
  setWhatILearned,
  addUsefulResourcesItem,
  removeUsefulResourcesItem,
  addSocialsItem,
  removeSocialsItem
} = readmeSlice.actions;
export default readmeSlice.reducer;
