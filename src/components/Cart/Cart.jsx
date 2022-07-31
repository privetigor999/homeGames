import React from "react";
import { Link } from "react-router-dom";
import styles from "./Cart.module.scss";

const Cart = () => {
  return (
    <div className={styles.cart}>
      <div className={styles.header}>
        <p className={styles.headerText}>Список товаров в корзине:</p>
        <div className={styles.removeAllButton}>
          <img src="img/bin.png" alt="bin" />
          <p>Очистить корзину</p>
        </div>
      </div>
      <div className={styles.cartList}>
        <div className={styles.cartItem}>
          <img
            className={styles.cartItemImg}
            src="img/products/1.png"
            alt="item"
          />
          <p className={styles.cartItemTitle}>Монополия</p>
          <div className={styles.plusAndMinusButtons}>
            <img src="img/minus.png" alt="minus" />
            <p>1</p>
            <img src="img/plus.png" alt="plus" />
          </div>
          <p>
            <b>100</b> руб
          </p>
          <img
            src="img/remove.png"
            alt="remove"
            className={styles.removeItemButton}
          />
        </div>
      </div>
      <div className={styles.bottomCart}>
        <div className={styles.totalItemsAndTotalPrice}>
          <p>
            Всего товаров: <span>5</span>
          </p>
          <p>
            Общая сумма: <span>100</span> рублей
          </p>
        </div>
        <div className={styles.bottomButtons}>
          <Link to="/">
            <button>Вернуться назад</button>
          </Link>

          <button>Купить</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
