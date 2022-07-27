import React from "react";
import ghostPng from "../images/ghost.png";
import cartPng from "../images/cart.png";

const Header = () => {
  return (
    <nav>
      <div className="flex items-center cursor-pointer">
        <p className="mainLogo pr-2">HOME</p>
        <img src={ghostPng} alt="ghost" className="w-[34px]" />
        <p className="mainLogo pl-2">GAMES</p>
      </div>
      <div className="headerNav">
        <p>Главная</p>
        <p>О нас</p>
        <p>Контакты</p>
      </div>
      <div className="cartBlock">
        <img src={cartPng} />
        <p>Корзина</p>
      </div>
    </nav>
  );
};

export default Header;
