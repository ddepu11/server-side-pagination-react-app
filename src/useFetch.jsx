import { useEffect } from "react";
import { useGlobalContext } from "./context";

const useFetch = () => {
  const { term, setNews, setLoading } = useGlobalContext();

  const url = `https://hn.algolia.com/api/v1/search?query=${term}&tags=story`;

  const getNews = async () => {
    setLoading(true);

    try {
      const res = await fetch(url);
      const { hits } = await res.json();
      setNews(hits);
      console.log(hits);
    } catch (error) {
      console.log(error);
      setNews([]);
    }

    setLoading(false);
  };

  useEffect(
    () => getNews(),

    [term]
  );
};

export { useFetch };
