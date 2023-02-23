import { useState } from "react";
import "./creator.scss";

type LanguageCode = "pt-br" | "en" | "ja" | "de" | "es";

type AvailableLanguages = {
  language: string,
  langcode: LanguageCode
}

const availableLanguages: AvailableLanguages[] = [
  {
    language: "Português",
    langcode: "pt-br"
  },
  {
    language: "English",
    langcode: "en"
  },
  {
    language: "日本語",
    langcode: "ja"
  },
  {
    language: "Deutsch",
    langcode: "de"
  },
  {
    language: "Español",
    langcode: "es"
  },
];

const Creator = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("pt-br");

  const handleSelection = (langcode: LanguageCode) => {
    setSelectedLanguage(langcode);
  };

  return (
    <div className="creator">
      <h1 className="creator__title">Criador</h1>
      <ul className="creator__languages">
        {availableLanguages.map(language => (
          <li key={language.langcode} className="creator__languages-option" ><button onClick={() => handleSelection(language.langcode)} type="button" className={`creator__languages-option-button ${selectedLanguage === language.langcode && "selected"} ${language.langcode === "ja" && "ja-borderfix"}`}>{language.language}</button></li>
        ))}
      </ul>
    </div>
  );
};

export default Creator;
