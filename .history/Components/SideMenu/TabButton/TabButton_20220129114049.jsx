import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import style from "./style.module.scss";

const TabButton = ({ label, icon, active }) => {
  //icon is a string : "fas coffee"
  const [iconFirst, iconLast] = icon.split(" ");

  //active is boolean indicating the current active tab button
  const integratedClasses = active
    ? [style.TabButton, "active-tab-btn"].join(" ")
    : style.TabButton;

  return (
    <button className={style.TabButton}>
      <FontAwesomeIcon icon={[iconFirst, iconLast]} />
      <h3>{label}</h3>
    </button>
  );
};

export default TabButton;
