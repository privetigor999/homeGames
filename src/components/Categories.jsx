import React, { useContext } from "react";
import SearchBlock from "./SearchBlock";
import { SearchContext } from "../pages/Home";

const Categories = ({ categoryIndex, onClickCategory, setCurrentPage }) => {
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
    setCurrentPage(1);
  };

  const { setSearchValue } = useContext(SearchContext);
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
