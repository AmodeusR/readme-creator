import { getFormText } from "../../utils/getFormText";
import { LanguageCode } from "../CreatorLanguages/CreatorLanguages";
import MantineInput from "../MantineInput/MantineInput";
import "./form.scss";

type CreatorFormProps = {
  selectedLanguage: LanguageCode;
}

const CreatorForm = ({ selectedLanguage }: CreatorFormProps) => {
  console.log(getFormText("pt-br", "title", "placeholder"));
  
  return (
    <form className="creator__form">
      <h2 className="form__section-title">Cabeçalho</h2>
      <div className="form__inputs">
        <MantineInput
          label={getFormText(selectedLanguage, "title", "value")}
          placeholder={getFormText(selectedLanguage, "title", "placeholder")}
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
