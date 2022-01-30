import React from "react";
import Image from "next/image";

import style from "./style.module.scss";
import { userLogo, AiFillBell, FaSearch } from "./constants";

const ToolBar = () => {
  return (
    <div className={style.Container}>
      <FaSearch />
      <div className={style.Notification}>
        <AiFillBell />
      </div>
      <h3>Alex Morgan</h3>
      <Image src={userLogo} alt="Alex Morgan" />
    </div>
  );
};

export default ToolBar;
