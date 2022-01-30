import React from "react";
import Image from "next/image";
import { nanoid } from "nanoid";

import style from "./style.module.scss";
import { insureLogo, nortonLogo, tabsButtons } from "./constants";
import TabButton from "./TabButton/TabButton";

const SideMenu = () => {
  return (
    <div className={style.Container}>
      <div className={style.TopLogoContainer}>
        <Image src={insureLogo} alt="insurSimple" />
      </div>
      <div className={style.TabsButtonsContainer}>
        {tabsButtons.map((btn) => (
          <TabButton key={nanoid()} label={btn.label} icon={btn.icon} />
        ))}
      </div>
      <div className={style.BottomLogoContainer}>
        <Image src={nortonLogo} alt="norton" />
      </div>
    </div>
  );
};
