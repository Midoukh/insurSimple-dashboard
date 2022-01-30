import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import style from "./style.module.scss";

const TabButton = ({ label, icon }) => {
  //icon is a string : "fas coffee"
  const [iconFirst, iconLast] = icon.split(" ");

  return (
    <button>
      <FontAwesomeIcon icon={[iconFirst, iconLast]} />
      <h3>{label}</h3>
    </button>
  );
};
