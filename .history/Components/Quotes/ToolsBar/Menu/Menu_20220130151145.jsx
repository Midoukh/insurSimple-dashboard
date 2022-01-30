import React from "react";
import Image from "next/image";

import style from "./style.module.scss";
import { profileIcon, settingsIcon, logOutIcon } from "./constants";

const Menu = () => {
  return (
    <ul className={style.Menu}>
      <h3>My Stuff</h3>
      <li>
        <Image src={profileIcon} alt="profile" />
        Profile
      </li>
      <li>
        <Image src={settingsIcon} alt="settings" />
        User Setting
      </li>
      <li>
        <Image src={logOutIcon} alt="log out" />
        Log out
      </li>
    </ul>
  );
};

export default Menu;
