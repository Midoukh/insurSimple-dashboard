import React from "react";
import Image from "next/image";

import style from "./style.module.scss";
import { insureLogo, nortonLogo } from "./constants";

const SideMenu = () => {
  return (
    <div className={style.Container}>
      <div className={style.TopLogoContainer}>
        <Image src={insureLogo} alt="insurSimple" />
      </div>
      <div className={style.TabsButtonsContainer}></div>
      <div className={style.BottomLogoContainer}>
        <Image src={nortonLogo} alt="norton" />
      </div>
    </div>
  );
};
