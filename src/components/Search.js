import React, { useState } from "react";
import "./Search.css";


const Search = ({ search }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearchFunction = (e) => {
    e.preventDefault();
    search(searchValue);
    resetInputField();
  };

  return (
    <form className="search">
      <input className="inputText" value={searchValue} onChange={handleSearchInputChanges} type="text" />

      <input className="button" onClick={callSearchFunction} type="submit" value="Поиск"  />
    </form>
  );
};

export default Search;
