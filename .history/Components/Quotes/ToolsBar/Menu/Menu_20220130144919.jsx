import React from "react";
import style from "./style.module.scss";

const Menu = () => {
  return (
    <ul className={style.Menu}>
      <h3>My Stuff</h3>
      <li>Profile</li>
      <li>User Setting</li>
      <li>Log out</li>
    </ul>
  );
};

export default Menu;
