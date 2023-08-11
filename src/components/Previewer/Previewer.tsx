"use client";

import { useAppSelector } from "@/redux/hooks";
import "./previewer.scss";

const Previewer = () => {
  const { header, overview, process, author } = useAppSelector(state => state.readme);
  return (
    <div className="creator__previewer">
      <h2 className="center">{header.title}</h2>
      <p className="center">{header.description}</p>
      {header.image &&
        <img src={header.image.preview} alt="User's readme header image" />
      }
    </div>
  );
};

export default Previewer;
