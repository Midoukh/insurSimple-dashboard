import React from "react";
import style from "./style.module.scss";
import { blob } from "./constants";
import Image from "next/image";

const Tab = ({ user }) => {
  const [firstName] = user.split(" ")[0];
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
