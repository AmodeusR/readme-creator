"use client";
// ? For some reason, this component needs to be a client component because of the imports below needing flushSync from React
import { CreatorForm, CreatorLanguages } from "../../components";
import "./creator.scss";


const Creator = () => {
  return (
    <div className="creator__wrapper">
      <h1 className="creator__title">Criador</h1>
      <CreatorLanguages />
      <main className="creator">
        <CreatorForm />
        <hr className="creator__separator" />
        <div className="creator__preview">
          <p>Preview</p>
        </div>
      </main>
    </div>
  );
};

export default Creator;
