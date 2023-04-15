import MantineInput from "../MantineInput/MantineInput";
import ImageDropzone from "../ImageDropzone/ImageDropzone";
import { LanguageCode } from "../../lang/form-fields-text";
import { FieldTextGetter } from "../../utils/getFormText";
import { SectionProps } from "./CreatorForm";

const Overview = ({ getFieldText, selectedLanguage }: SectionProps) => {
  const screenCaptureStyle = {
    fontSsize: "16px",
    fontWeight: "500",
    color: "#212529",
  };

  return (
    <div className="form__section">
      <h2 className="form__section-title">Sessão Geral</h2>
      <MantineInput label={getFieldText("challenges", "value")} placeholder={getFieldText("challenges", "placeholder")} />
      <p style={screenCaptureStyle}>Capturas de Tela</p>
    </div>
  );
};

export default Overview;
