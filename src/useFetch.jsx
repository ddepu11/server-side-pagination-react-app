import { useEffect } from "react";
import { useGlobalContext } from "./context";
import { SET_LOADING, SET_NEWS, SET_NO_OF_PAGES } from "./actions";

const useFetch = () => {
  const { term, dispatch } = useGlobalContext();

  const url = `https://hn.algolia.com/api/v1/search?query=${term}&tags=story`;

  const getNews = async () => {
    dispatch({ type: SET_LOADING });
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({ type: SET_NEWS, payload: data.hits });
      dispatch({ type: SET_NO_OF_PAGES, payload: data.nbPages });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(
    () => getNews(),
    // eslint-disable-next-line
    [term]
  );
};

export { useFetch };
