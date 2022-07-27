import React, { useState } from "react";
import monopolyPng from "./../images/items/1.png";
import cartWhitePng from "./../images/cartWhite.png";

const Products = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="cards">
      <div className="card">
        <div className="imageCard">
          <img src={monopolyPng} alt="monopoly" />
        </div>

        <p className="flex-1">Monopoly</p>
        <div className="bottomDetails">
          <p className="priceDetail">
            <span>200</span> руб
          </p>
          <button className="addItemButton" onClick={() => setCount(count + 1)}>
            <p className="addButtonCount">
              Добавить <span>{count}</span>
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
