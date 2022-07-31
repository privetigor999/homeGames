import React from "react";

const Categories = ({
  categoryIndex,
  onClickCategory,
  searchValue,
  setSearchValue,
  setCurrentPage,
}) => {
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

      <div className="searchBlock">
        <input
          placeholder="Поиск ..."
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
        />
        <img src="img/search.png" alt="search" />
      </div>
    </ul>
  );
};

export default Categories;
