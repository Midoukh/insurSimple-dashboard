import React from "react";
import fontawesome from "@fortawesome/fontawesome";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import style from "./style.module.scss";

const TabButton = ({ label, icon, active }) => {
  //icon is a string : "fas coffee"
  console.log(label, active);
  const [prefix, iconName] = icon.split(" ");

  //active is boolean indicating the current active tab button
  const integratedClasses = active
    ? [style.TabButton, "active-tab-btn"].join(" ")
    : style.TabButton;
  console.log([prefix, iconName]);
  return (
    <button className={integratedClasses}>
      <FontAwesomeIcon icon={[prefix, iconName]} />
      <h3>{label}</h3>
    </button>
  );
};

export default TabButton;
