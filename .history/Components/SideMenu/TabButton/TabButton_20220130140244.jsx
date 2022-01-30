import React from "react";
import Image from "next/image";
import Link from "next/link";
import style from "./style.module.scss";

const TabButton = ({ label, icon, active, path }) => {
  //active is boolean indicating the current active tab button
  const integratedClasses = active
    ? [style.TabButton, "active-tab-btn"].join(" ")
    : style.TabButton;

  return (
    <Link href={`/${path}`} passHref>
      <button className={integratedClasses}>
        <Image src={icon} alt={`${label}`} />
        <h3>{label}</h3>
      </button>
    </Link>
  );
};

export default TabButton;
