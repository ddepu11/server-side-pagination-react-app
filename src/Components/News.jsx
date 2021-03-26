import React from "react";
import { useGlobalContext } from "../context";
import { useFetch } from "../useFetch";
import Loading from "./Loading";

export default function News() {
  const { news, loading, handleDelete } = useGlobalContext();
  // console.log(news, loading);

  useFetch();

  let toShow =
    !loading && news.length !== 0
      ? news.map((item, index) => {
          const {
            author,
            created_at,
            title,
            points,
            relevancy_score,
            url,
            objectID,
          } = item;

          return (
            <a key={index} href={url} className="news card">
              <div className="title flex c">
                <p>{title}</p>
              </div>
              <div className="autor flex c">
                <span>Author:</span>
                <p>{author}</p>
              </div>
              <div className="created flex c">
                <span>Created At:</span>
                <p>{new Date(created_at).toLocaleDateString()}</p>
              </div>
              <div className="points flex c">
                <span>Points:</span>
                <p>{points}</p>
              </div>
              <div className="relevent flex c">
                <span>Relevent:</span>
                <p>{Math.floor(relevancy_score / 1000)}%</p>
              </div>
              <button className="del" data-id={objectID} onClick={handleDelete}>
                Delete
              </button>
            </a>
          );
        })
      : "";

  return <main className="hero">{loading ? <Loading /> : toShow}</main>;
}
