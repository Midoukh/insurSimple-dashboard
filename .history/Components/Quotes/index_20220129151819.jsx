import React, { useEffect } from "react";

import style from "./style.module.scss";
import { getData } from "../../utils";

const Quotes = () => {
  const asyncFun = async () => {
    const data = await getData("/api/quotes");
    console.log(data);
  };
  useEffect(() => {
    asyncFun();
  }, []);

  return (
    <div className={style.Container}>
      <div className={style.Quotes}></div>
    </div>
  );
};

export default Quotes;
