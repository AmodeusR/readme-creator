import MantineInput from "../MantineInput/MantineInput";
import ImageDropzone from "../ImageDropzone/ImageDropzone";
import { SectionProps } from "./CreatorForm";
import TagInput from "../TagInput/TagInput";

const Overview = ({ getFieldText, selectedLanguage }: SectionProps) => {

  return (
    <div className="form__section form__inputs">
      <h2 className="form__section-title">Sessão Geral</h2>
      <MantineInput
        label={getFieldText("challenges", "value")}
        placeholder={getFieldText("challenges", "placeholder")}
        description={getFieldText("challenges", "description")}
      />
      <div>
        <p className="form__screen-captures-title">Capturas de Tela</p>
        <div className="form__screen-captures">
          <ImageDropzone selectedLanguage={selectedLanguage} size="small" />
          <ImageDropzone selectedLanguage={selectedLanguage} size="small" />
          <ImageDropzone selectedLanguage={selectedLanguage} size="small" />
        </div>
      </div>
      <TagInput />
    </div>
  );
};

export default Overview;
