"use client";

import { useAppSelector } from "@/redux/hooks";
import "./previewer.scss";

const Previewer = () => {
  const { header, overview, process, author, creatorFormLanguage } = useAppSelector(state => state.readme);
  return (
    <div className="creator__previewer">
      <h2 className="center">{header[creatorFormLanguage].title}</h2>
      <p className="center">{header[creatorFormLanguage].description}</p>
      {header.image &&
        <img src={header.image.preview} alt="User's readme header image" />
      }
    </div>
  );
};

export default Previewer;
