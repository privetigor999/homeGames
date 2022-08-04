import React from "react";
import styles from "./EmptyCart.module.scss";
import { Link } from "react-router-dom";
const EmptyCart = () => {
  return (
    <div className={styles.root}>
      <img src="img/emptyCart.png" alt="not found" />
      <b>Корзина пуста</b>
      <p>
        Вы еще не сделали заказ, вернитесь на
        <Link to="/">
          <span> главную страницу.</span>
        </Link>
      </p>
    </div>
  );
};

export default EmptyCart;
