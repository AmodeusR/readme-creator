"use client";

import { useState, useReducer } from "react";
import { TextInputProps, TextareaProps } from "@mantine/core";
import MantineInput from "../MantineInput/MantineInput";
import TextareaInput from "../TextareaInput/TextareaInput";
import "./item-register.scss";
import { Plus } from "@/assets";
import ListItem from "../ListItem/ListItem";
import { nanoid } from "@reduxjs/toolkit";
import {
  actionTypes,
  initialState,
  reducer,
} from "./item-register.reducer";

type ItemRegisterProps = {
  fields: {
    left: TextInputProps;
    right: TextInputProps;
  };
  textarea?: TextareaProps;
  title: string;
};

export type Item = {
  id: string;
  title: string;
  link?: string;
  description?: string;
};
const ItemRegister = ({
  fields,
  textarea = undefined,
  title,
}: ItemRegisterProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [items, setItems] = useState<Item[]>([
    {
      id: nanoid(),
      title: "There is no way",
      link: "https://github.com/asjdoasjdoadjsoasjdaosjao",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, laborum voluptatum sunt nostrum facilis quia illo officiis quo rerum possimus delectus similique dolore exercitationem sapiente mollitia sint, at labore non.",
    },
    {
      id: nanoid(),
      title: "Welcome Home",
      link: "https://github.com/",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, nesciunt!",
    },
    {
      id: nanoid(),
      title: "Subsistis Teminis",
      link: "https://github.com/",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, laborum voluptatum sunt nostrum facilis quia illo officiis quo rerum possimus.",
    },
  ]);

  const addItem = () => {
    if (state.title.length === 0) {
      alert("You need at least a title");
      return;
    }
    const newItem: Item = {
      id: nanoid(),
      title: state.title,
      link: state.link,
      description: state.description
    }

    setItems(prevState => [...prevState, newItem]);
    dispatch({ type: actionTypes.CLEAR })
  };
  const deleteItem = (id: string) => {
    setItems((curr) => curr.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h3>{title}</h3>
      <div className="item-register__row-1">
        <MantineInput
          {...fields.left}
          value={state.title}
          onChange={(e) =>
            dispatch({ type: actionTypes.CHANGE_TITLE, payload: e.target.value })
          }
        />
        <MantineInput
          {...fields.right}
          value={state.link}
          onChange={(e) =>
            dispatch({
              type: actionTypes.CHANGE_LINK,
              payload: e.target.value,
            })
          }
        />
        <button className="item-register__button" type="button" onClick={addItem}>
          <Plus />
        </button>
      </div>
      {typeof textarea === "object" && (
        <>
          <TextareaInput
            {...textarea}
            value={state.description}
            onChange={(e) =>
              dispatch({
                type: actionTypes.CHANGE_DESCRIPTION,
                payload: e.target.value,
              })
            }
          />
          <h4 className="item-list__title">Adicionados</h4>
          <ul className="item-list">
            {items.map((item) => (
              <ListItem item={item} deleteItem={deleteItem} key={item.id} />
            )).reverse()}
          </ul>
        </>
      )}
      {/* <table>
              <tr>
                <th></th>
                <th></th>
              </tr>
              {items.map(item => (

              ))}
            </table> */}
    </div>
  );
};

export default ItemRegister;
