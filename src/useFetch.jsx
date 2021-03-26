import { useEffect } from "react";
import { useGlobalContext } from "./context";
import { SET_LOADING, SET_NEWS, SET_TERM, REMOVE_NEWS } from "./actions";

const useFetch = () => {
  const { term, dispatch } = useGlobalContext();

  const url = `https://hn.algolia.com/api/v1/search?query=${term}&tags=story`;

  const getNews = async () => {
    dispatch({ type: SET_LOADING });
    try {
      const res = await fetch(url);
      const { hits } = await res.json();
      dispatch({ type: SET_NEWS, payload: hits });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => getNews(), [term]);
};

export { useFetch };
