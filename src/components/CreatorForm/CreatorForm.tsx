import Header from "./Header";
import Overview from "./Overview";
import Process from "./Process";
import Author from "./Author";
import "./form.scss";

const CreatorForm = () => {
  
  return (
    <form className="creator__form">
      <Header />
      <Overview />
      <Process />
      <Author />
    </form>
  );
};

export default CreatorForm;
