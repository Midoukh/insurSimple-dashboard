import React from "react";
import Image from "next/image";

import style from "./style.module.scss";
import { insureLogo, nortonLogo } from "./constants";
import TabButton from "./TabButton/TabButton";

const SideMenu = () => {
  return (
    <div className={style.Container}>
      <div className={style.TopLogoContainer}>
        <Image src={insureLogo} alt="insurSimple" />
      </div>
      <div className={style.TabsButtonsContainer}>
        <TabButton label="Dashboard" icon="fas-list-ul" />
        <TabButton label="Quotes" icon="fa-file-invoice-dollar" />
        <TabButton />
        <TabButton />
      </div>
      <div className={style.BottomLogoContainer}>
        <Image src={nortonLogo} alt="norton" />
      </div>
    </div>
  );
};