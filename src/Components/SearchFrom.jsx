import React from "react";
import { useGlobalContext } from "../context";

export default function SearchFrom() {
  const { term, handleSubmit, handleChange } = useGlobalContext();

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input type="text" value={term} onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
  );
}
