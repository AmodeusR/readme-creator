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
  const { overview, creatorFormLanguage } = useAppSelector(
    (state) => state.readme
  );
  const getFieldText = curryTextGetter(creatorFormLanguage, "standard");

  return (
    <div className="form__section form__inputs">
      <h2 className="form__section-title">Sessão Geral</h2>
      {/* // TODO: Change this for TagInput */}
      <MantineInput
        label={getFieldText("challenges", "value")}
        placeholder={getFieldText("challenges", "placeholder")}
        description={getFieldText("challenges", "description")}
        value={overview[creatorFormLanguage].challenges}
        onChange={(e) => dispatch(setChallenges(e.target.value))}
      />
      <div>
        <p className="form__screen-captures-title">Capturas de Tela</p>
        <div className="form__screen-captures">
          <SmallImageDropzone
            imageOrigin={overview.images[1]}
            setImageFunction={setScreenshots}
            removeImageFunction={removeScreenshots}
            position={1}
          />
          <SmallImageDropzone
            imageOrigin={overview.images[2]}
            setImageFunction={setScreenshots}
            removeImageFunction={removeScreenshots}
            position={2}
          />
          <SmallImageDropzone
            imageOrigin={overview.images[3]}
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
        value={overview[creatorFormLanguage].links}
        onChange={(e) => dispatch(setLinks(e.target.value))}
      />
    </div>
  );
};

export default Overview;
