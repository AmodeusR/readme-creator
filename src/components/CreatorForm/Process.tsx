"use client";

import { developedWithOptions } from "@/utils/developedWithOptions";
import TagInput from "../TagInput/TagInput";
import TextareaInput from "../TextareaInput/TextareaInput";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setDevelopedWith, setWhatILearned } from "@/redux/slices/readmeSlice";
import UsefulResourcesItems from "../UsefulResourcesItems/UsefulResourcesItems";
import { curryTextGetter } from "@/utils/getFormText";
import { Tag } from "@/assets";

const Process = () => {
  const dispatch = useAppDispatch();
  const { process, creatorFormLanguage } = useAppSelector(state => state.readme);
  const getFieldText = curryTextGetter(creatorFormLanguage, "standard");
  const getExtendedFieldText = curryTextGetter(creatorFormLanguage, "extended");

  return (
    <div className="form__section">
      <h2 className="form__section-title">Processo</h2>
      <TagInput
        data={developedWithOptions}
        dispatcher={setDevelopedWith}
        label={getFieldText("developedWith", "value")}
        description={getFieldText("developedWith", "description")}
        placeholder={getFieldText("developedWith", "placeholder")}
        icon={<Tag />}
      />
      <TextareaInput
        label={getFieldText("whatILearned", "value")}
        placeholder={getFieldText("whatILearned", "placeholder")}
        description={getFieldText("whatILearned", "description")}
        value={process[creatorFormLanguage].whatILearned}
        onChange={(e) => dispatch(setWhatILearned(e.target.value))}
      />
      {/* Useful resources */}
      <UsefulResourcesItems
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