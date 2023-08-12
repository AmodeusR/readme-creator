import { LanguageCode } from "@/lang/form-fields-text";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type initialState = {
  pageLanguage: LanguageCode;
}

const initialState: initialState = {
  pageLanguage: "pt-br"
}

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setPageLanguage: (state, action: PayloadAction<LanguageCode>) => {
      state.pageLanguage = action.payload;
    }  }
})


export const { setPageLanguage } = languageSlice.actions;

export default languageSlice.reducer;