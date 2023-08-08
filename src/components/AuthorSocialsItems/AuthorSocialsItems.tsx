"use client";

import { useReducer } from "react";
import { TextInputProps } from "@mantine/core";
import MantineInput from "../MantineInput/MantineInput";
import "../UsefulResourcesItems/item-register.scss";
import { Plus } from "@/assets";
import ListItem, { Item } from "../ListItem/ListItem";
import { nanoid } from "@reduxjs/toolkit";
import { actionTypes, initialState, reducer } from "./author-socials.reducer";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addSocialsItem, removeSocialsItem } from "@/redux/slices/readmeSlice";

type AuthorSocialsItemsProps = {
  fields: {
    left: TextInputProps;
    right: TextInputProps;
  };
  title: string;
};

const AuthorSocialsItems = ({ fields, title }: AuthorSocialsItemsProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const reduxDispatch = useAppDispatch();
  const { socials } = useAppSelector(state => state.readme.author);

  const addItem = () => {
    if (state.title.length === 0) {
      alert("You need at least a title");
      return;
    }

    const newItem: Item = {
      id: nanoid(),
      title: state.title,
      link: state.link,
    };

    reduxDispatch(addSocialsItem(newItem));
    dispatch({ type: actionTypes.CLEAR });
  };
  const deleteItem = (id: string) => {
    reduxDispatch(removeSocialsItem(id));
  };

  return (
    <div>
      <h3>{title}</h3>
      <div className="item-register__row-1">
        <MantineInput
          {...fields.left}
          value={state.title}
          onChange={(e) =>
            dispatch({
              type: actionTypes.CHANGE_TITLE,
              payload: e.target.value,
            })
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
        <button
          className="item-register__button"
          type="button"
          onClick={addItem}
        >
          <Plus />
        </button>
      </div>
      <ul className="item-list">
        {socials
          .map((item) => (
            <ListItem item={item} deleteItem={deleteItem} key={item.id} />
          ))
          .reverse()}
      </ul>
    </div>
  );
};

export default AuthorSocialsItems;
