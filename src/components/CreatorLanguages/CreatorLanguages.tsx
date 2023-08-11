"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { LanguageCode } from "../../lang/form-fields-text";
import { setCreatorFormLanguage } from "@/redux/slices/languageSlice";

type AvailableLanguage = Readonly<{
  language: string;
  langcode: LanguageCode;
}>;

// Available languages to create a README for
const availableLanguages: AvailableLanguage[] = [
  {
    language: "Português",
    langcode: "pt-br",
  },
  {
    language: "English",
    langcode: "en",
  },
  {
    language: "日本語",
    langcode: "ja",
  },
  {
    language: "Deutsch",
    langcode: "de",
  },
  {
    language: "Español",
    langcode: "es",
  },
];

const CreatorLanguages = () => {
  const { creatorFormLanguage } = useAppSelector((state) => state.language);
  const dispatch = useAppDispatch();

  return (
    <ul className="creator__languages">
      {availableLanguages.map((language) => (
        <li
          key={language.langcode}
          className={`creator__languages-option ${
            creatorFormLanguage === language.langcode && "selected"
          }`}
        >
          <button
            onClick={() => dispatch(setCreatorFormLanguage(language.langcode))}
            type="button"
            className="creator__languages-option-button"
          >
            {language.language}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CreatorLanguages;
