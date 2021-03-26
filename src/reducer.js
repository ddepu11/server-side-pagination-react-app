import {
  SET_LOADING,
  SET_NEWS,
  SET_TERM,
  REMOVE_NEWS,
  SET_NO_OF_PAGES,
} from "./actions";

const reducer = (state, action) => {
  const payload = action.payload;

  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case SET_TERM:
      return {
        ...state,
        term: payload,
      };
    case SET_NEWS:
      return {
        ...state,
        news: payload,
        loading: false,
      };
    case REMOVE_NEWS:
      return {
        ...state,
        news: state.news.filter((item) => item.objectID !== payload),
      };
    case SET_NO_OF_PAGES:
      return {
        ...state,
        noOfPages: +payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export { reducer };
