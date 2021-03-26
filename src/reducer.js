import { SET_LOADING, SET_NEWS, SET_TERM, REMOVE_NEWS } from "./actions";

const reducer = (state, action) => {
  const payload = action.payload;

  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
      break;

    case SET_TERM:
      return {
        ...state,
        term: payload,
      };
  }
};

export { reducer };
