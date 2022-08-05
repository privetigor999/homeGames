import React, { useCallback, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setSearchValue,
  selectorSearchValue,
  setCategoryIndex,
} from "../features/filter/filterSlice";

const SearchBlock = () => {
  const dispatch = useDispatch();
  const searchValue = useContext(selectorSearchValue);
  const handleSearchValue = (event) => {
    dispatch(setSearchValue(event.target.value));
  };
  const handleFocusInput = () => {
    dispatch(setCategoryIndex(0));
  };
  return (
    <div className="searchBlock">
      <input
        placeholder="Поиск товара ..."
        value={searchValue}
        onChange={handleSearchValue}
        onFocus={handleFocusInput}
      />
      <img src="img/search.png" alt="search" />
    </div>
  );
};

export default SearchBlock;
