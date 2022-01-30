import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaListUl, faAddressBook } from "@fortawesome/free-solid-svg-icons";
import style from "./style.module.scss";

const TabButton = ({ label, icon, active }) => {
  //active is boolean indicating the current active tab button
  const integratedClasses = active
    ? [style.TabButton, "active-tab-btn"].join(" ")
    : style.TabButton;

  return (
    <button className={integratedClasses}>
      <FontAwesomeIcon icon={faAddressBook} />
      <h3>{label}</h3>
    </button>
  );
};

export default TabButton;
