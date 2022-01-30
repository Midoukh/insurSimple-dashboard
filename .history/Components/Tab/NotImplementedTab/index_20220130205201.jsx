import React from "react";
import style from "./style.module.scss";

const NotImplementedTab = ({ label }) => {
  return (
    <div className={style.Container}>
      <div className={style.Title}>
        <h1>{label}</h1>
      </div>
    </div>
  );
};

export default NotImplementedTab;
