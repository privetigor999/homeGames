import React from "react";
import styles from "./ErrorBlock.module.scss";

const ErrorBlock = () => {
  return (
    <div className={styles.root}>
      <img src="img/notFound.png" />
      <b>Ошибка загрузки данных</b>
      <p>
        В настоящий момент мы имеем проблемы с сервером. Подождите несколько
        минут, мы пытаемся исправить ситуацию.
      </p>
    </div>
  );
};

export default ErrorBlock;
