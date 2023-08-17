"use client";

import { useAppSelector } from "@/redux/hooks";
import HeaderPreview from "./HeaderPreview";
import IndexPreview from "./IndexPreview";
import OverviewPreview from "./OverviewPreview";
import ProcessPreview from "./ProcessPreview";
import AuthorPreview from "./AuthorPreview";
import "./previewer.scss";

const Previewer = () => {
  const { header, overview, process, author, creatorFormLanguage } = useAppSelector(state => state.readme);
  return (
    <div className="creator__previewer">
      <HeaderPreview source={header} language={creatorFormLanguage} />
      {/* <IndexPreview /> */}
      <OverviewPreview source={overview} language={creatorFormLanguage} />
      <ProcessPreview source={process} language={creatorFormLanguage} />
      <AuthorPreview source={author} language={creatorFormLanguage} />
    </div>
  );
};

export default Previewer;
