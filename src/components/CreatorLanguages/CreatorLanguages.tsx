export type LanguageCode = "pt-br" | "en" | "ja" | "de" | "es";

type AvailableLanguage = Readonly<{
  language: string;
  langcode: LanguageCode;
}>;

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

type CreatorLanguagesProps = {
  selectedLanguage: LanguageCode;
  handleSelection: (langcode: LanguageCode) => void;
}

const CreatorLanguages = ({ selectedLanguage, handleSelection }: CreatorLanguagesProps) => {
  return (
    <ul className="creator__languages">
      {availableLanguages.map((language) => (
        <li key={language.langcode} className="creator__languages-option">
          <button
            onClick={() => handleSelection(language.langcode)}
            type="button"
            className={`creator__languages-option-button ${
              selectedLanguage === language.langcode && "selected"
            } ${language.langcode === "ja" && "ja-borderfix"}`}
          >
            {language.language}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CreatorLanguages;
