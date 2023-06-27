import { developedWithOptions } from "@/utils/developedWithOptions";
import React from "react";
import { SectionProps } from "./CreatorForm";
import TagInput from "../TagInput/TagInput";
import TextareaInput from "../TextareaInput/TextareaInput";

const Process = ({ getFieldText, selectedLanguage }: SectionProps) => {
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
    </div>
  );
};

export default Process;
