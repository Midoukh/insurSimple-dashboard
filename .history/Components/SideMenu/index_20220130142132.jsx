import React from "react";
import Image from "next/image";
import Link from "next/link";
import { nanoid } from "nanoid";

import style from "./style.module.scss";
import { insureLogo, nortonLogo, tabsButtons } from "./constants";
import TabButton from "./TabButton/TabButton";

const SideMenu = ({ currentTab }) => {
  //this code check the currentTab and set the current active tab button
  const handleActiveTabButton = () => {
    //return an updated array
    return tabsButtons.map((btn) => {
      if (currentTab === btn.path) btn.active = true;
      else btn.active = false;
      return btn;
    });
  };

  return (
    <div className={style.Container}>
      <div className={style.TopLogoContainer}>
        <Image src={insureLogo} alt="insurSimple" />
      </div>
      <div className={style.TabsButtonsContainer}>
        {handleActiveTabButton().map((btn) => (
          <TabButton
            key={nanoid(10)}
            label={btn.label}
            icon={bnt.active ? btn.activeIcon : btn.icon}
            active={btn.active}
            path={btn.path}
          />
        ))}
      </div>
      <div className={style.BottomLogoContainer}>
        <Image src={nortonLogo} alt="norton" />
      </div>
    </div>
  );
};

export default SideMenu;
