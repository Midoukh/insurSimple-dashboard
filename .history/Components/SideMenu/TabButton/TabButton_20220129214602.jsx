import React from "react";
import Image from "next/image";
import style from "./style.module.scss";

const TabButton = ({ label, icon, active }) => {
  //active is boolean indicating the current active tab button
  const integratedClasses = active
    ? [style.TabButton, "active-tab-btn"].join(" ")
    : style.TabButton;

  return (
    <button className={integratedClasses}>
      <Image src={icon} alt={`${label}`} />
      <h3>{label}</h3>
    </button>
  );
};

export default TabButton;
