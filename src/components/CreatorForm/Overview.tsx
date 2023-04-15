import MantineInput from "../MantineInput/MantineInput";
import ImageDropzone from "../ImageDropzone/ImageDropzone";
import { SectionProps } from "./CreatorForm";
import TagInput from "../TagInput/TagInput";

const Overview = ({ getFieldText, selectedLanguage }: SectionProps) => {
  const screenCaptureStyle = {
    fontSsize: "16px",
    fontWeight: "500",
    color: "#212529",
  };

  return (
    <div className="form__section form__inputs">
      <h2 className="form__section-title">Sessão Geral</h2>
      <MantineInput
        label={getFieldText("challenges", "value")}
        placeholder={getFieldText("challenges", "placeholder")}
        description={getFieldText("challenges", "description")}
      />
      <div>
        <p style={screenCaptureStyle}>Capturas de Tela</p>
        <div className="form__screen-captures">
          <ImageDropzone selectedLanguage={selectedLanguage} />
          <ImageDropzone selectedLanguage={selectedLanguage} />
          <ImageDropzone selectedLanguage={selectedLanguage} />
        </div>
      </div>
      <TagInput />
    </div>
  );
};

export default Overview;
