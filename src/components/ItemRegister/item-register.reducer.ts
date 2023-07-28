import { Reducer } from "react";

export const initialState = {
  title: "",
  link: "",
  description: "",
};

type State = typeof initialState;

export const actionTypes = {
  CHANGE_TITLE: "CHANGE_TITLE",
  CHANGE_LINK: "CHANGE_LINK",
  CHANGE_DESCRIPTION: "CHANGE_DESCRIPTION",
  CLEAR: "CLEAR",
} as const;

export type Action = {
  type:
    | typeof actionTypes.CHANGE_TITLE
    | typeof actionTypes.CHANGE_LINK
    | typeof actionTypes.CHANGE_DESCRIPTION
    | typeof actionTypes.CLEAR;
  payload?: string;
};

export function reducer(state: State, action: Action) {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.CHANGE_TITLE:
      return {
        ...state,
        title: payload,
      } as State;
    case actionTypes.CHANGE_LINK:
      return {
        ...state,
        link: payload,
      } as State;
    case actionTypes.CHANGE_DESCRIPTION:
      return {
        ...state,
        description: payload,
      } as State;
    case actionTypes.CLEAR:
      return {
        title: "",
        link: "",
        description: "",
      } as State;
    default:
      return state;
  }
}
