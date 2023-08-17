import { PreviewersProps } from "./previewers.types";
import { Overview } from "@/redux/slices/readmeSlice.types";

const OverviewPreview = ({ source, language }: PreviewersProps<Overview>) => {
  const isChallenges = !!source[language].challenges.length;
  const isLinks = !!source[language].links;

  if (!isChallenges && !isLinks) return;

  return (
    <div className="previewer__overview">
      {(isChallenges || isLinks) && <h2>Visão geral</h2>}
      {isChallenges && (
        <ul>
          {source[language].challenges.map((challenge) => (
            <li key={challenge}>{challenge}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OverviewPreview;
