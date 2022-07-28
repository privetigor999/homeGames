import React, { useState } from "react";

const Products = ({ id, imageUrl, title, price, category }) => {
  const [count, setCount] = useState(0);
  return (
    <div className="card">
      <div className="imageCard">
        <img src={imageUrl} alt="monopoly" />
      </div>
      <p className="flex-1 pt-2">{title}</p>
      <div className="bottomDetails">
        <p className="priceDetail">
          <span>{price}</span> руб
        </p>
        <button className="addItemButton" onClick={() => setCount(count + 1)}>
          <p className="addButtonCount">
            Добавить {count > 0 && <span>{count}</span>}
          </p>
        </button>
      </div>
    </div>
  );
};

export default Products;
