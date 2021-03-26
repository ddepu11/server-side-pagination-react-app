import { createContext, useContext, useState, useReducer } from "react";
import { reducer } from "./reducer";
import { SET_LOADING, SET_NEWS, SET_TERM, REMOVE_NEWS } from "./actions";

const AppContext = createContext();

const initialState = {
  loading: false,
  news: [],
  term: "js",
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleDelete = (e) => {
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    dispatch({ type: SET_TERM, payload: e.target.value });
  };

  return (
    <AppContext.Provider
      value={{ ...state, handleDelete, dispatch, handleChange, handleSubmit }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => useContext(AppContext);

export { AppProvider, useGlobalContext };
