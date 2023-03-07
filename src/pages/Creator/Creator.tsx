import { useState } from "react";
import { CreatorForm, CreatorLanguages } from "../../components";
import { LanguageCode } from "../../lang/form-fields-text";
import "./creator.scss";


const Creator = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageCode>("pt-br");

  const handleSelection = (langcode: LanguageCode) => {
    setSelectedLanguage(langcode);
  };

  return (
    <div className="creator__wrapper">
      <h1 className="creator__title">Criador</h1>
      <CreatorLanguages selectedLanguage={selectedLanguage} handleSelection={handleSelection} />
      <main className="creator">
        <CreatorForm selectedLanguage={selectedLanguage} />
        <hr className="creator__separator" />
        <div className="creator__preview">
          <p>Preview</p>
        </div>
      </main>
    </div>
  );
};

export default Creator;
