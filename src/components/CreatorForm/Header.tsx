"use client";

import MantineInput from "../MantineInput/MantineInput";
import ImageDropzone from "../ImageDropzone/ImageDropzone";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  removeHeaderImage,
  setHeaderDescription,
  setHeaderImage,
  setHeaderTitle,
} from "@/redux/slices/readmeSlice";
import { curryTextGetter } from "@/utils/getFormText";

const Header = () => {
  const dispatch = useAppDispatch();
  const { header, creatorFormLanguage } = useAppSelector((state) => state.readme);
  const getFieldText = curryTextGetter(creatorFormLanguage, "standard");

  return (
    <div className="form__section">
      <h2 className="form__section-title">Cabeçalho</h2>

      <MantineInput
        label={getFieldText("title", "value")}
        placeholder={getFieldText("title", "placeholder")}
        description={getFieldText("title", "description")}
        value={header[creatorFormLanguage].title}
        onChange={(e) => dispatch(setHeaderTitle(e.target.value))}
      />
      <MantineInput
        label={getFieldText("description", "value")}
        placeholder={getFieldText("description", "placeholder")}
        description={getFieldText("description", "description")}
        value={header[creatorFormLanguage].description}
        onChange={(e) => dispatch(setHeaderDescription(e.target.value))}
      />
      <ImageDropzone
        setImageFunction={setHeaderImage}
        imageOrigin={header.image}
        removeImageFunction={removeHeaderImage}
      />
    </div>
  );
};

export default Header;
