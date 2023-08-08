import MantineInput from "../MantineInput/MantineInput";
import TextareaInput from "../TextareaInput/TextareaInput";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  removeScreenshots,
  setChallenges,
  setLinks,
  setScreenshots,
} from "@/redux/slices/readmeSlice";
import SmallImageDropzone from "../ImageDropzone/SmallImageDropzone";
import { curryTextGetter } from "@/utils/getFormText";

const Overview = () => {
  const dispatch = useAppDispatch();
  const { challenges, images, links } = useAppSelector(
    (state) => state.readme.overview
  );
  const { creatorFormLanguage } = useAppSelector(state => state.language);
  const getFieldText = curryTextGetter(creatorFormLanguage, "standard");

  return (
    <div className="form__section form__inputs">
      <h2 className="form__section-title">Sessão Geral</h2>
      <MantineInput
        label={getFieldText("challenges", "value")}
        placeholder={getFieldText("challenges", "placeholder")}
        description={getFieldText("challenges", "description")}
        value={challenges}
        onChange={(e) => dispatch(setChallenges(e.target.value))}
      />
      <div>
        <p className="form__screen-captures-title">Capturas de Tela</p>
        <div className="form__screen-captures">
          <SmallImageDropzone
            imageOrigin={images[1]}
            setImageFunction={setScreenshots}
            removeImageFunction={removeScreenshots}
            position={1}
          />
          <SmallImageDropzone
            imageOrigin={images[2]}
            setImageFunction={setScreenshots}
            removeImageFunction={removeScreenshots}
            position={2}
          />
          <SmallImageDropzone
            imageOrigin={images[3]}
            setImageFunction={setScreenshots}
            removeImageFunction={removeScreenshots}
            position={3}
          />
        </div>
      </div>
      <TextareaInput
        label={getFieldText("links", "value")}
        placeholder={getFieldText("links", "placeholder")}
        description={getFieldText("links", "description")}
        value={links}
        onChange={(e) => dispatch(setLinks(e.target.value))}
      />
    </div>
  );
};

export default Overview;
