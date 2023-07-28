import { developedWithOptions } from "@/utils/developedWithOptions";
import { SectionProps } from "./CreatorForm";
import TagInput from "../TagInput/TagInput";
import TextareaInput from "../TextareaInput/TextareaInput";
import ItemRegister from "../ItemRegister/ItemRegister";

const Process = ({
  getFieldText,
  getExtendedFieldText,
  selectedLanguage,
}: SectionProps) => {
  if (getExtendedFieldText === undefined) return;

  return (
    <div className="form__section">
      <h2 className="form__section-title">Processo</h2>
      <TagInput
        data={developedWithOptions}
        label={getFieldText("developedWith", "value")}
        description={getFieldText("developedWith", "description")}
        placeholder={getFieldText("developedWith", "placeholder")}
      />
      <TextareaInput
        label={getFieldText("whatILearned", "value")}
        placeholder={getFieldText("whatILearned", "placeholder")}
        description={getFieldText("whatILearned", "description")}
      />
      {/* Useful resources */}
      <ItemRegister
        title="Recursos úteis"
        textarea={{
          label: getExtendedFieldText("usefulResources", "description", "value"),
          description: getExtendedFieldText(
            "usefulResources",
            "description",
            "description"
          ),
          placeholder: getExtendedFieldText(
            "usefulResources",
            "description",
            "placeholder"
          ),
        }}
        fields={{
          left: {
            label: getExtendedFieldText("usefulResources", "solution", "value"),
            description: getExtendedFieldText(
              "usefulResources",
              "solution",
              "description"
            ),
            placeholder: getExtendedFieldText(
              "usefulResources",
              "solution",
              "placeholder"
            ),
          },
          right: {
            label: getExtendedFieldText("usefulResources", "link", "value"),
            description: getExtendedFieldText(
              "usefulResources",
              "link",
              "description"
            ),
            placeholder: getExtendedFieldText(
              "usefulResources",
              "link",
              "placeholder"
            ),
          }
        }}
      />
    </div>
  );
};

export default Process;
