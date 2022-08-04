import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [navIndex, setNavIndex] = useState(0);
  const { totalPrice, totalItems } = useSelector((state) => state.cart);

  const onClickNavIndex = (index) => {
    setNavIndex(index);
  };
  const navigationItems = {
    Главная: "/",
    Доставка: "/delivery",
    "О магазине": "/about",
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
      <Link to="/cart">
        <div className="cart">
          <p>
            <b>{totalPrice}</b> руб
          </p>
          /
          <div className="cartTotalItems">
            <img src="img/cartWhite.png" alt="cart" />
            <b>{totalItems}</b>
          </div>
        </div>
      </Link>
    </nav>
  );
};

export default Header;
