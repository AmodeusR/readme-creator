import { LanguageCode } from "@/lang/form-fields-text";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type initialState = {
  setPageLanguage: LanguageCode;
  setCreatorFormLanguage: LanguageCode;
}

const initialState: initialState = {
  setPageLanguage: "en",
  setCreatorFormLanguage: "en"
}

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setPageLanguage: (state, action: PayloadAction<LanguageCode>) => {
      state.setPageLanguage = action.payload;
    },
    setCreatorFormLanguage: (state, action: PayloadAction<LanguageCode>) => {
      state.setCreatorFormLanguage = action.payload;
    }
  }
})


const {} = languageSlice.actions;

export default languageSlice.reducer;