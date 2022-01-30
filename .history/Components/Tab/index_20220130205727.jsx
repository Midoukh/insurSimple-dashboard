import React from "react";
import Image from "next/image";

import Progress from "./Progress";
import NotImplementedTab from "./NotImplementedTab";
import style from "./style.module.scss";
import { blob } from "./constants";

const Tab = ({ user, currentTab }) => {
  //user is 'Alex Morgan'
  const [firstName] = user.name.split(" ");

  //currentTab is the tab the user selected based on the route
  let TabToBeDisplayed = null;
  if (currentTab === "progress") TabToBeDisplayed = <Progress />;
  else TabToBeDisplayed = <NotImplementedTab />;

  return (
    <div className={style.Container}>
      <div className={style.Header}>
        <div className={style.Gretting}>
          <h4>Dashboard</h4>
          <h1>Good morning, {firstName}</h1>
        </div>
        <Image src={blob} alt="blob" />
      </div>
      {TabToBeDisplayed}
    </div>
  );
};

export default Tab;
