import { Delete } from "@/assets";
import { shortenText } from "@/utils/shortenText";

export type Item = {
  id: string;
  title: string;
  link?: string;
  description?: string;
};

type ListItemProps = {
  deleteItem: (id: string) => void;
  item: Item;
}

const ListItem = ({ item, deleteItem }: ListItemProps) => {

  return (
    <li className="item-list__item">
      <button
        type="button"
        className="item-list__button"
        onClick={() => deleteItem(item.id)}
      >
        <Delete className="item-list__delete" />
      </button>
      <div className="item-list__head">
        <span>{item.title}</span>
        <span>{shortenText(item.link, 32)}</span>
      </div>
      {item.description &&
        <p className="item-list__description">{item.description}</p>
      }
    </li>
  );
};

export default ListItem;
