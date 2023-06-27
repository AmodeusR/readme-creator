import { FieldTextGetter, curryTextGetter } from "../../utils/getFormText";
import { LanguageCode } from "../../lang/form-fields-text";
import "./form.scss";
import Header from "./Header";
import Overview from "./Overview";
import Process from "./Process";

export type SectionProps = {
  getFieldText: FieldTextGetter;
  selectedLanguage: LanguageCode
}


type CreatorFormProps = {
  selectedLanguage: LanguageCode;
}

const CreatorForm = ({ selectedLanguage }: CreatorFormProps) => {
  const getFieldText = curryTextGetter(selectedLanguage, "standard");
  // const getExtendedFieldText = curryTextGetter(selectedLanguage, "extended");

  return (
    <form className="creator__form">
      <Header getFieldText={getFieldText} selectedLanguage={selectedLanguage} />
      <Overview getFieldText={getFieldText} selectedLanguage={selectedLanguage} />
      <Process getFieldText={getFieldText} selectedLanguage={selectedLanguage} />
    </form>
  );
};

export default CreatorForm;
