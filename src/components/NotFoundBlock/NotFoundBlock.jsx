import React from "react";
import { Link } from "react-router-dom";
import styles from "./NotFoundBlock.module.scss";

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <img src="img/notFound.png" alt="not found" />
      <b>Страница не найдена</b>
      <p>
        На нашем сайте такой страницы нет, попробуйте зайти на
        <Link to="/">
          <span>главную страницу</span>
        </Link>
      </p>
    </div>
  );
};

export default NotFoundBlock;
