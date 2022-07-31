import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [navIndex, setNavIndex] = useState(0);
  const onClickNavIndex = (index) => {
    setNavIndex(index);
  };
  const navigationItems = {
    Главная: "/",
    Доставка: "/delivery",
    "О магазине": "/about",
    Корзина: "/cart",
  };
  return (
    <nav>
      <Link to="/">
        <div className="flex items-center cursor-pointer">
          <p className="mainLogo pr-2">HOME</p>
          <img src="img/ghost.png" alt="ghost" className="w-[34px] ghostPng" />
          <p className="mainLogo pl-2">GAMES</p>
        </div>
      </Link>

      <div className="headerNav">
        {Object.keys(navigationItems).map((key, index) => (
          <Link to={`${navigationItems[key]}`} key={index}>
            <p
              onClick={() => onClickNavIndex(index)}
              className={navIndex === index ? "activeNav" : ""}
            >
              {key}
            </p>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Header;
