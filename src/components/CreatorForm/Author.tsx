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
            label: getExtendedFieldText("socials", "platform", "value"),
            description: getExtendedFieldText("socials", "platform", "description"),
            placeholder: getExtendedFieldText("socials", "platform", "placeholder"),
          },
          right: {
            label: getExtendedFieldText("socials", "link", "value"),
            description: getExtendedFieldText("socials", "link", "description"),
            placeholder: getExtendedFieldText("socials", "link", "placeholder"),
          },
        }}
      />
    </div>
  );
};

export default Author;
