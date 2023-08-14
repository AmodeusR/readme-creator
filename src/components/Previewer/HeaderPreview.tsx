import React from "react";
import { Header } from "@/redux/slices/readmeSlice.types";
import { PreviewersProps } from "./previewers.types";


const HeaderPreview = ({
  source,
  language,
}: PreviewersProps<Header>) => {
  return (
    <div className="previewer__header">
      <h2 className="center">{source[language].title}</h2>
      {source.image && (
        <img src={source.image.preview} alt="User's readme header image" />
      )}
      <p className="center">{source[language].description}</p>
    </div>
  );
};

export default HeaderPreview;
