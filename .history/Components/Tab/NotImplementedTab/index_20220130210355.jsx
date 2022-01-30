import React from "react";
import style from "./style.module.scss";

const NotImplementedTab = ({ label }) => {
  return (
    <div className={style.Container}>
      <div className={style.Title}>
        <h1>{label}</h1>
      </div>
      <div className={style.Content}>
        <h1>Not implement yet 🗒</h1>
      </div>
    </div>
  );
};

export default NotImplementedTab;
