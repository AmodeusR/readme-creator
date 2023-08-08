"use client";

import { useAppSelector } from "@/redux/hooks";
import AuthorSocialsItems from "../AuthorSocialsItems/AuthorSocialsItems";
import { curryTextGetter } from "@/utils/getFormText";

const Author = () => {
  const { creatorFormLanguage } = useAppSelector(state => state.language); 
  const getExtendedFieldText = curryTextGetter(creatorFormLanguage, "extended");

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
