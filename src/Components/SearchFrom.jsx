import React from "react";
import { useGlobalContext } from "../context";

export default function SearchFrom() {
  const { term, handleChange } = useGlobalContext();

  return (
    <form className="form">
      <input type="text" value={term} onChange={handleChange} />
    </form>
  );
}
