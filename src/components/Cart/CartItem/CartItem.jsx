import React from "react";
import { useDispatch } from "react-redux";
import {
  incrementCount,
  decrementCount,
  removeItem,
} from "../../../features/cart/cartSlice";
import styles from "./CartItem.module.scss";

const CartItem = ({ id, title, imageUrl, price, count }) => {
  const dispatch = useDispatch();
  const onClickPlus = (id) => {
    dispatch(incrementCount(id));
  };
  const onClickMinus = (id) => {
    dispatch(decrementCount(id));
  };
  const onClickRemove = () => {
    dispatch(removeItem(id));
  };
  return (
    <div className={styles.cartItem}>
      <img className={styles.cartItemImg} src={imageUrl} alt="item" />
      <p className={styles.cartItemTitle}>{title}</p>
      <div className={styles.plusAndMinusButtons}>
        <img
          src="img/minus.png"
          alt="minus"
          onClick={() => {
            onClickMinus(id);
          }}
        />
        <p>{count}</p>
        <img src="img/plus.png" alt="plus" onClick={() => onClickPlus(id)} />
      </div>
      <p>
        <b>{price * count}</b> руб
      </p>
      <img
        onClick={() => onClickRemove(id)}
        src="img/remove.png"
        alt="remove"
        className={styles.removeItemButton}
      />
    </div>
  );
};

export default CartItem;
