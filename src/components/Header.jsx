import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryIndex } from "../features/filter/filterSlice";
import { selectorTotal } from "../features/cart/cartSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [navIndex, setNavIndex] = useState(0);
  const { totalPrice, totalItems } = useSelector(selectorTotal);

  const changeCurrentPage = () => {
    dispatch(setCategoryIndex(0));
  };
  const navigationItems = {
    Главная: "/",
    Доставка: "/delivery",
    "О магазине": "/about",
  };

  return (
    <nav>
      <Link to="/">
        <div
          className="flex items-center cursor-pointer"
          onClick={changeCurrentPage}
        >
          <p className="mainLogo pr-2">HOME</p>
          <img src="img/ghost.png" alt="ghost" className="w-[34px] ghostPng" />
          <p className="mainLogo pl-2">GAMES</p>
        </div>
      </Link>

      <div className="headerNav">
        {Object.keys(navigationItems).map((key, index) => (
          <Link to={`${navigationItems[key]}`} key={index}>
            <p
              onClick={() => setNavIndex(index)}
              className={navIndex === index ? "activeNav" : ""}
            >
              {key}
            </p>
          </Link>
        ))}
      </div>
      <Link to="/cart">
        <div className="cart" onClick={() => setNavIndex(undefined)}>
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
