import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import style from "./style.module.scss";

const TabButton = ({ label, icon }) => {
  //icon is a string : "fas coffee"

  return (
    <button>
      <FontAwesomeIcon icon={["fas", icon]} />
      <h3>{label}</h3>
    </button>
  );
};

export default TabButton;
