import React, { useEffect, useState } from "react";

import style from "./style.module.scss";
import { getData } from "../../utils";

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);
  const asyncFun = async (signal) => {
    const response = await getData("/api/quotes", signal);
    console.log(response);
    // setQuotes(response.data.quotes);
  };
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    asyncFun(signal);

    //cleaning up async subscriptions
    return () => controller.abort();
  }, []);

  return (
    <div className={style.Container}>
      <div className={style.Quotes}></div>
    </div>
  );
};

export default Quotes;
