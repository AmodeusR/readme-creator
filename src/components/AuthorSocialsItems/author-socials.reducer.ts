// ? Here, "title" means the platform

export const initialState = {
  title: "",
  link: ""
};

type State = typeof initialState;

export const actionTypes = {
  CHANGE_TITLE: "CHANGE_TITLE",
  CHANGE_LINK: "CHANGE_LINK",
  CLEAR: "CLEAR",
} as const;

export type Action = {
  type:
    | typeof actionTypes.CHANGE_TITLE
    | typeof actionTypes.CHANGE_LINK
    | typeof actionTypes.CLEAR;
  payload?: string;
};

export const reducer = (state: State, action: Action) => {
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