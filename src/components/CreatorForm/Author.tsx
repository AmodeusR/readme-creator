import AuthorSocialsItems from "../AuthorSocialsItems/AuthorSocialsItems";
import { SectionProps } from "./CreatorForm";

const Author = ({ selectedLanguage, getExtendedFieldText}: SectionProps) => {
  if (getExtendedFieldText === undefined) return;

  return (
    <div className="form__section">
      <h2 className="form__section-title">Autor</h2>
      <AuthorSocialsItems
        title="Referências"
        fields={{
          left: {
            label: getExtendedFieldText("references", "platform", "value"),
            description: getExtendedFieldText("references", "platform", "description"),
            placeholder: getExtendedFieldText("references", "platform", "placeholder"),
          },
          right: {
            label: getExtendedFieldText("references", "link", "value"),
            description: getExtendedFieldText("references", "link", "description"),
            placeholder: getExtendedFieldText("references", "link", "placeholder"),
          },
        }}
      />
    </div>
  );
};

export default Author;
