import { LanguageCode } from "@/lang/form-fields-text";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type initialState = {
  pageLanguage: LanguageCode;
  creatorFormLanguage: LanguageCode;
}

const initialState: initialState = {
  pageLanguage: "pt-br",
  creatorFormLanguage: "pt-br"
}

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setPageLanguage: (state, action: PayloadAction<LanguageCode>) => {
      state.pageLanguage = action.payload;
    },
    setCreatorFormLanguage: (state, action: PayloadAction<LanguageCode>) => {
      state.creatorFormLanguage = action.payload;
    }
  }
})


export const { setPageLanguage, setCreatorFormLanguage } = languageSlice.actions;

export default languageSlice.reducer;