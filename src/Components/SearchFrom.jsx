import React from "react";
import { useGlobalContext } from "../context";

export default function SearchFrom() {
  
  const { term, setTerm } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input type="text" value={term} onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
  );
}
