import React from "react";

import style from "./style.module.scss";

const TabButton = ({ label, icon, active }) => {
  //active is boolean indicating the current active tab button
  const integratedClasses = active
    ? [style.TabButton, "active-tab-btn"].join(" ")
    : style.TabButton;

  const ReactIcon = icon;
  return (
    <button className={integratedClasses}>
      <ReactIcon />
      <h3>{label}</h3>
    </button>
  );
};

export default TabButton;
