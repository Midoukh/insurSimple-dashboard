import React from "react";
import style from "./style.module.scss";

const SideMenu = () => {
  return (
    <div className={style.Container}>
      <div className={style.TopLogoContainer}></div>
      <div className={style.TabsButtonsContainer}></div>
      <div className={style.BottomLogoContainer}></div>
    </div>
  );
};
