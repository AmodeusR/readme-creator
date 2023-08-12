import { Image } from "@/components/ImageDropzone/ImageDropzone";
import {
  ImageWithPosition,
  Positions,
} from "@/components/ImageDropzone/SmallImageDropzone";
import { Item } from "@/components/ListItem/ListItem";
import { LanguageCode } from "@/lang/form-fields-text";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Header, Overview, Process } from "./readmeSlice.types";

type InitialState = {
  header: Header;
  overview: Overview;
  process: Process;
  author: {
    socials: Item[];
  };
  creatorFormLanguage: LanguageCode;
};

const initialState: InitialState = {
  header: {
    "pt-br": {
      title: "",
      description: "",
    },
    en: {
      title: "",
      description: "",
    },
    ja: {
      title: "",
      description: "",
    },
    de: {
      title: "",
      description: "",
    },
    es: {
      title: "",
      description: "",
    },
    image: null,
  },
  overview: {
    "pt-br": { challenges: "", links: "" },
    en: { challenges: "", links: "" },
    ja: { challenges: "", links: "" },
    de: { challenges: "", links: "" },
    es: { challenges: "", links: "" },
    images: {
      1: null,
      2: null,
      3: null,
    },
  },
  process: {
    "pt-br": { whatILearned: "", usefulResources: [] },
    en: { whatILearned: "", usefulResources: [] },
    ja: { whatILearned: "", usefulResources: [] },
    de: { whatILearned: "", usefulResources: [] },
    es: { whatILearned: "", usefulResources: [] },
    developedWith: [],
  },
  author: {
    socials: []
  },
  creatorFormLanguage: "pt-br",
};

const readmeSlice = createSlice({
  name: "readme",
  initialState,
  reducers: {
    setHeaderTitle: (state, action: PayloadAction<string>) => {
      const { creatorFormLanguage } = state;
      state.header[creatorFormLanguage].title = action.payload;
    },
    setHeaderDescription: (state, action: PayloadAction<string>) => {
      const { creatorFormLanguage } = state;
      state.header[creatorFormLanguage].description = action.payload;
    },
    // Non-serializable value being used: Image
    setHeaderImage: (state, action: PayloadAction<Image>) => {
      state.header.image = action.payload;
    },
    removeHeaderImage: (state) => {
      state.header.image = null;
    },
    setChallenges: (state, action: PayloadAction<string>) => {
      const { creatorFormLanguage } = state;
      state.overview[creatorFormLanguage].challenges = action.payload;
    },
    setScreenshots: (state, action: PayloadAction<ImageWithPosition>) => {
      const position = action.payload.position;
      state.overview.images[position] = action.payload.payload;
    },
    removeScreenshots: (state, action: PayloadAction<Positions>) => {
      state.overview.images[action.payload] = null;
    },
    setLinks: (state, action: PayloadAction<string>) => {
      const { creatorFormLanguage } = state;
      state.overview[creatorFormLanguage].links = action.payload;
    },
    setDevelopedWith: (state, action: PayloadAction<string[]>) => {
      state.process.developedWith = action.payload;
    },
    setWhatILearned: (state, action: PayloadAction<string>) => {
      const { creatorFormLanguage } = state;
      state.process[creatorFormLanguage].whatILearned = action.payload;
    },
    addUsefulResourcesItem: (state, action: PayloadAction<Item>) => {
      const { creatorFormLanguage } = state;
      state.process[creatorFormLanguage].usefulResources.push(action.payload);
    },
    removeUsefulResourcesItem: (state, action: PayloadAction<string>) => {
      const { creatorFormLanguage } = state;
      const newItems = state.process[
        creatorFormLanguage
      ].usefulResources.filter((item) => item.id !== action.payload);
      state.process[creatorFormLanguage].usefulResources = newItems;
    },
    addSocialsItem: (state, action: PayloadAction<Item>) => {
      state.author.socials.push(action.payload);
    },
    removeSocialsItem: (state, action: PayloadAction<string>) => {
      const newItems = state.author.socials.filter(
        (item) => item.id != action.payload
      );
      state.author.socials = newItems;
    },
    setCreatorFormLanguage: (state, action: PayloadAction<LanguageCode>) => {
      state.creatorFormLanguage = action.payload;
    },
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
  removeSocialsItem,
  setCreatorFormLanguage,
} = readmeSlice.actions;
export default readmeSlice.reducer;
