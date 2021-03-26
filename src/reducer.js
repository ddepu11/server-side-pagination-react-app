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
      break;
    case SET_NEWS:
      return {
        ...state,
        news: payload,
        loading: false,
      };
      break;
    case REMOVE_NEWS:
      return {
        ...state,
        news: state.news.filter((item) => item.objectID !== payload),
      };
      break;
  }
};

export { reducer };
