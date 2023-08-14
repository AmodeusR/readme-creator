"use client";

import { useAppSelector } from "@/redux/hooks";
import "./previewer.scss";
import HeaderPreview from "./HeaderPreview";

const Previewer = () => {
  const { header, overview, process, author, creatorFormLanguage } = useAppSelector(state => state.readme);
  return (
    <div className="creator__previewer">
      <HeaderPreview source={header} language={creatorFormLanguage} />      
      <div className="previewer__overview">
        
      </div>
      <div className="previewer__process">
        <h3>Processo</h3>
          {process.developedWith.length > 0 && process.developedWith.map(item => (
        <>
          <h4>Desenvolvido com...</h4>
          <ul>
              <li key={item}>{item}</li>
          </ul>
        </>
          ))}
          {process["pt-br"].whatILearned && 
          <>
            <h4>O que aprendi</h4>
            <p>{process["pt-br"].whatILearned}</p>
          </>
          }
      </div>
    </div>
  );
};

export default Previewer;
