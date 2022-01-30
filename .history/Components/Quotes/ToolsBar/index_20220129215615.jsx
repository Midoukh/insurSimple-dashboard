import React, { useState } from "react";
import Image from "next/image";

import style from "./style.module.scss";
import { userLogo, searchIcon, alarmIcon } from "./constants";

const ToolBar = () => {
  const [isNotif] = useState(true);
  return (
    <div className={style.Container}>
      <Image src={searchIcon} alt="search" />
      <div className={style.Notification}>
        {isNotif && <div className={style.NotificationSign}></div>}
        <Image src={alarmIcon} alt="notification" />
      </div>
      <h3>Alex Morgan</h3>
      <Image src={userLogo} alt="Alex Morgan" />
    </div>
  );
};

export default ToolBar;
