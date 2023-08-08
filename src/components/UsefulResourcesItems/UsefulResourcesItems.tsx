"use client";

import { useReducer } from "react";
import { TextInputProps, TextareaProps } from "@mantine/core";
import MantineInput from "../MantineInput/MantineInput";
import TextareaInput from "../TextareaInput/TextareaInput";
import "./item-register.scss";
import { Plus } from "@/assets";
import ListItem, { Item } from "../ListItem/ListItem";
import { nanoid } from "@reduxjs/toolkit";
import { actionTypes, initialState, reducer } from "./useful-resources.reducer";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  addUsefulResourcesItem,
  removeUsefulResourcesItem,
} from "@/redux/slices/readmeSlice";

type UsefulResourcesItemsProps = {
  fields: {
    left: TextInputProps;
    right: TextInputProps;
  };
  textarea: TextareaProps;
  title: string;
};

const UsefulResourcesItems = ({
  fields,
  textarea,
  title,
}: UsefulResourcesItemsProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const reduxDispatch = useAppDispatch();
  const { usefulResources } = useAppSelector((state) => state.readme.process);

  const addItem = () => {
    if (state.title.length === 0) {
      alert("You need at least a title");
      return;
    }
    const newItem: Item = {
      id: nanoid(),
      title: state.title,
      link: state.link,
      description: state.description,
    };

    reduxDispatch(addUsefulResourcesItem(newItem));
    dispatch({ type: actionTypes.CLEAR });
  };
  const deleteItem = (id: string) => {
    reduxDispatch(removeUsefulResourcesItem(id));
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
        {usefulResources
          .map((item) => (
            <ListItem item={item} deleteItem={deleteItem} key={item.id} />
          ))
          .reverse()}
      </ul>
    </div>
  );
};

export default UsefulResourcesItems;
