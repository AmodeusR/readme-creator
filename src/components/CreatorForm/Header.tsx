"use client";

import MantineInput from "../MantineInput/MantineInput";
import ImageDropzone from "../ImageDropzone/ImageDropzone";
import { SectionProps } from "./CreatorForm";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setHeaderDescription, setHeaderTitle } from "@/redux/slices/readmeSlice";

const Header = ({ getFieldText, selectedLanguage }: SectionProps) => {
  const { header } = useAppSelector(state => state.readme);
  const dispatch = useAppDispatch();

  
  return (
    <div className="form__section">
      <h2 className="form__section-title">Cabeçalho</h2>

      <MantineInput
        label={getFieldText("title", "value")}
        placeholder={getFieldText("title", "placeholder")}
        description={getFieldText("title", "description")}
        value={header.title}
        onChange={(e) => dispatch(setHeaderTitle(e.target.value))}
      />
      <MantineInput
        label="Descrição"
        placeholder={getFieldText("description", "placeholder")}
        description={getFieldText("description", "description")}
        value={header.description}
        onChange={(e) => dispatch(setHeaderDescription(e.target.value))}
      />
      <ImageDropzone selectedLanguage={selectedLanguage} />
    </div>
  );
};

export default Header;
