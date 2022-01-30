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
        <strong>Profile</strong>
      </li>
      <li>
        <Image src={settingsIcon} alt="settings" />
        <strong>User Setting</strong>
      </li>
      <li>
        <Image src={logOutIcon} alt="log out" />
        <strong>Log out</strong>
      </li>
    </ul>
  );
};

export default Menu;
