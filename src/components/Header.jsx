import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [navIndex, setNavIndex] = useState(0);
  const navigationItems = ["Главная", "О нас", "Контакты"];
  const onClickNavIndex = (index) => {
    setNavIndex(index);
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
      <Link to="/cart">
        <div className="cartBlock">
          <img src="img/cart.png" />
          <p>Корзина</p>
        </div>
      </Link>
    </nav>
  );
};

export default Header;
