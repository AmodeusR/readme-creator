import { curryTextGetter, getFieldText } from "../../utils/getFormText";
import { LanguageCode } from "../../lang/form-fields-text";
import MantineInput from "../MantineInput/MantineInput";
import "./form.scss";

type CreatorFormProps = {
  selectedLanguage: LanguageCode;
}

const CreatorForm = ({ selectedLanguage }: CreatorFormProps) => {
  const getText = curryTextGetter("pt-br", "standard");
  console.log(getText("description", "placeholder"));

  return (
    <form className="creator__form">
      <h2 className="form__section-title">Cabeçalho</h2>
      <div className="form__inputs">
        <MantineInput
          label={getFieldText(selectedLanguage, "title", "value")}
          placeholder={getFieldText(selectedLanguage, "title", "placeholder")}
        />
        <MantineInput
          label="Descrição"
          placeholder="Esta é uma resolução ao desafio NFT Preview Card Component por Frontend Mentor."
          description="Uma curta descrição do objetivo do projeto"
        />
        <MantineInput label="ala" description="oioi" />
      </div>
    </form>
  );
};

export default CreatorForm;
