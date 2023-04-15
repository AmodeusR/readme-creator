import MantineInput from "../MantineInput/MantineInput";
import ImageDropzone from "../ImageDropzone/ImageDropzone";
import { SectionProps } from "./CreatorForm";

const Header = ({ getFieldText, selectedLanguage }: SectionProps) => {
  return (
    <div className="form__section">
      <h2 className="form__section-title">Cabeçalho</h2>

      <MantineInput
        label={getFieldText("title", "value")}
        placeholder={getFieldText("title", "placeholder")}
        description={getFieldText("title", "description")}
      />
      <MantineInput
        label="Descrição"
        placeholder={getFieldText("description", "placeholder")}
        description={getFieldText("description", "description")}
      />
      <ImageDropzone selectedLanguage={selectedLanguage} />
    </div>
  );
};

export default Header;
