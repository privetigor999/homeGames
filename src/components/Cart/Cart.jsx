import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearItems } from "./../../features/cart/cartSlice";
import { Link } from "react-router-dom";
import CartItem from "./CartItem/CartItem";
import EmptyCart from "./EmptyCart/EmptyCart";
import styles from "./Cart.module.scss";

const Cart = () => {
  const dispatch = useDispatch();
  const { totalPrice, totalItems, items } = useSelector((state) => state.cart);
  const removeAllItems = () => {
    dispatch(clearItems());
  };

  if (!totalPrice) {
    return <EmptyCart />;
  }

  return (
    <div className={styles.cart}>
      <div className={styles.header}>
        <p className={styles.headerText}>Список товаров в корзине:</p>
        <div className={styles.removeAllButton} onClick={removeAllItems}>
          <img src="img/bin.png" alt="bin" />
          <p>Очистить корзину</p>
        </div>
      </div>
      <div className={styles.cartList}>
        {items.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <div className={styles.bottomCart}>
        <div className={styles.totalItemsAndTotalPrice}>
          <p>
            Всего товаров: <span>{totalItems}</span>
          </p>
          <p>
            Общая сумма: <span>{totalPrice}</span> рублей
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
