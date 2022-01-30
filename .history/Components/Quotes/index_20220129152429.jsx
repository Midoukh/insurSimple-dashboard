import React, { useEffect, useState } from "react";

import style from "./style.module.scss";
import { getData } from "../../utils";

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);
  const asyncFun = async () => {
    const response = await getData("/api/quotes");
    setQuotes(response.data.quotes);
  };
  useEffect(() => {
    let subscribe = true;
    asyncFun();

    //cleaning up async subscriptions
    return () => (subscribe = false);
  }, []);

  return (
    <div className={style.Container}>
      <div className={style.Quotes}></div>
    </div>
  );
};

export default Quotes;
