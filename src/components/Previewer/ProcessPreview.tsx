import { PreviewersProps } from "./previewers.types";
import { Process } from "@/redux/slices/readmeSlice.types";

const ProcessPreview = ({ source, language }: PreviewersProps<Process>) => {
  return (
    <div className="previewer__process">
      <h3>Processo</h3>
      {source.developedWith.length > 0 &&
        <>
          <h4>Desenvolvido com...</h4>
          <ul>
          {source.developedWith.map((item) => (
            <li key={item}>{item}</li>)
          )}
          </ul>
        </>
        }
      {source[language].whatILearned && (
        <>
          <h4>O que aprendi</h4>
          <p>{source[language].whatILearned}</p>
        </>
      )}
    </div>
  );
};

export default ProcessPreview;
