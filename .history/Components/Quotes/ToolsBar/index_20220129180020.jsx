import React, { useState } from "react";
import Image from "next/image";

import style from "./style.module.scss";
import { userLogo, AiFillBell, FaSearch } from "./constants";

const ToolBar = () => {
  const [isNotif] = useState(true);
  return (
    <div className={style.Container}>
      <FaSearch />
      <div className={style.Notification}>
        {isNotif && <div className={style.NotificationSign}></div>}
        <AiFillBell />
      </div>
      <h3>Alex Morgan</h3>
      <Image src={userLogo} alt="Alex Morgan" />
    </div>
  );
};

export default ToolBar;
