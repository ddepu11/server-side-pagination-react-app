import { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer";
import { REMOVE_NEWS, SET_TERM, PREV_PAGE, NEXT_PAGE } from "./actions";

const AppContext = createContext();

const initialState = {
  loading: false,
  news: [],
  term: "js",
  noOfPages: 0,
  currentPage: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleDelete = (e) => {
    e.preventDefault();
    const id = e.target.dataset.id;

    dispatch({ type: REMOVE_NEWS, payload: id });
  };

  const handleChange = (e) => {
    dispatch({ type: SET_TERM, payload: e.target.value });
  };

  const handleNextPage = () => {
    dispatch({ type: NEXT_PAGE });
  };
  const handlePrevPage = () => {
    dispatch({ type: PREV_PAGE });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        handleDelete,
        dispatch,
        handleChange,
        handleNextPage,
        handlePrevPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => useContext(AppContext);

export { AppProvider, useGlobalContext };
