import MantineInput from "../MantineInput/MantineInput";
import TextareaInput from "../TextareaInput/TextareaInput";
import "./item-register.scss";
import { Plus } from "@/assets";

type ItemRegisterProps = {
  textarea?: object;
}

const ItemRegister = ({ textarea = undefined}: ItemRegisterProps) => {
  return (
    <div>
      <h3>Recursos úteis</h3>
        <div className="item-register__row-1">
          <MantineInput />
          <MantineInput />
          <button className="item-register__button" type="button"><Plus /></button>
        </div>
        { typeof textarea === "object" && (
          <TextareaInput />
        )
        }
    </div>
  );
};

export default ItemRegister;
