import React, { useState } from "react";

const Header = () => {
  const [navIndex, setNavIndex] = useState(0);
  const navigationItems = ["Главная", "О нас", "Контакты"];
  const onClickNavIndex = (index) => {
    setNavIndex(index);
  };
  return (
    <nav>
      <div className="flex items-center cursor-pointer">
        <p className="mainLogo pr-2">HOME</p>
        <img src="img/ghost.png" alt="ghost" className="w-[34px]" />
        <p className="mainLogo pl-2">GAMES</p>
      </div>
      <div className="headerNav">
        {navigationItems.map((item, index) => (
          <p
            key={index}
            onClick={() => onClickNavIndex(index)}
            className={navIndex === index ? "activeNav" : ""}
          >
            {item}
          </p>
        ))}
      </div>
      <div className="cartBlock">
        <img src="img/cart.png" />
        <p>Корзина</p>
      </div>
    </nav>
  );
};

export default Header;
