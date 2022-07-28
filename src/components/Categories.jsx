import React, { useState } from "react";

const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const categories = [
    "Все",
    "Для компании",
    "Для семьи",
    "Для влюбленных",
    "Для детей",
  ];

  const [isVisisblePopup, setIsVisiblePopup] = useState(false);
  const popupCategories = ["популярности", "цене", "поназванию"];
  const [currentListIndex, setCurrentListIndex] = useState(0);
  const onClickListCategory = (index) => {
    setCurrentListIndex(index);
    setIsVisiblePopup(!isVisisblePopup);
  };

  const onClickCategory = (index) => {
    setActiveIndex(index);
  };

  return (
    <ul className="categories">
      {categories.map((category, index) => (
        <li
          key={index}
          onClick={() => onClickCategory(index)}
          className={activeIndex === index ? "activeCategory" : undefined}
        >
          {category}
        </li>
      ))}

      <div className="searchBlock">
        <input placeholder="Поиск ..." />
        <img src="img/search.png" alt="search" />
      </div>
      <div className="popupCategory">
        <p>Сортировать по:</p>
        <span onClick={() => setIsVisiblePopup(!isVisisblePopup)}>
          {popupCategories[currentListIndex]}
        </span>
        <div className="popupList">
          {isVisisblePopup &&
            popupCategories.map((category, index) => (
              <p
                onClick={() => onClickListCategory(index)}
                key={index}
                className="popupItem"
              >
                {category}
              </p>
            ))}
        </div>
      </div>
    </ul>
  );
};

export default Categories;
