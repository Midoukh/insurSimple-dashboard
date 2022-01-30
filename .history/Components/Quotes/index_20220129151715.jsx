import React, { useEffect } from "react";

import style from "./style.module.scss";
import { getData } from "../../utils";

const Quotes = () => {
  useEffect(() => {
    const data = getData("/api/quotes");
    console.log(data);
  }, []);

  return (
    <div className={style.Container}>
      <div className={style.Quotes}></div>
    </div>
  );
};

export default Quotes;
