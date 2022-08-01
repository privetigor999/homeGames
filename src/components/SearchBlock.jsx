import React, { useContext } from "react";
import { SearchContext } from "../pages/Home";

const SearchBlock = () => {
  const { searchValue, setSearchValue } = useContext(SearchContext);
  return (
    <div className="searchBlock">
      <input
        placeholder="Поиск ..."
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <img src="img/search.png" alt="search" />
    </div>
  );
};

export default SearchBlock;
