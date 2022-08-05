import React from "react";
import SearchBlock from "./SearchBlock";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage, setSearchValue } from "../features/filter/filterSlice";

const Categories = ({ onClickCategory }) => {
  const dispatch = useDispatch();
  const categoryIndex = useSelector((state) => state.filter.categoryIndex);
  const categories = [
    "Все",
    "Для компании",
    "Для семьи",
    "Для влюбленных",
    "Для детей",
  ];
  const handleClickCategory = (index) => {
    onClickCategory(index);
    setSearchValue("");
    dispatch(setCurrentPage(1));
  };

  return (
    <ul className="categories">
      {categories.map((category, index) => (
        <li
          key={index}
          onClick={() => handleClickCategory(index)}
          className={categoryIndex === index ? "activeCategory" : undefined}
        >
          {category}
        </li>
      ))}

      <SearchBlock />
    </ul>
  );
};

export default Categories;
