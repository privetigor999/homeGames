import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, selectorCartItems } from "../features/cart/cartSlice";

const Products = ({ id, imageUrl, title, price }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector(selectorCartItems(id));
  const addedCount = cartItem ? cartItem.count : 0;
  const handleAddItem = () => {
    const item = {
      id,
      title,
      price,
      imageUrl,
    };
    dispatch(addItem(item));
  };
  return (
    <div className="card">
      <div className="imageCard">
        <img src={imageUrl} alt="image" />
      </div>
      <p className="flex flex-1 pt-2 justify-center items-center text-xl font-semibold">
        {title}
      </p>
      <div className="bottomDetails">
        <p className="priceDetail">
          <span>{price}</span> руб
        </p>
        <button className="addItemButton" onClick={handleAddItem}>
          <p className="addButtonCount">
            Добавить {addedCount > 0 && <span>{addedCount}</span>}
          </p>
        </button>
      </div>
    </div>
  );
};

export default Products;
