import React from "react";
import style from "./style.module.scss";
import { blob } from "./constants";
import Image from "next/image";

const Tab = ({ user, activeTab }) => {
  //user is 'Alex Morgan'
  const [firstName] = user.name.split(" ");

  //activeTab is the tab the user selected based on the route

  return (
    <div className={style.Container}>
      <div className={style.Header}>
        <div>
          <h4>Dashboard</h4>
          <h1>Good morning, {firstName}</h1>
        </div>
        <Image src={blob} alt="blob" />
      </div>
    </div>
  );
};

export default Tab;
