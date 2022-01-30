import React, { useEffect, useState } from "react";

import style from "./style.module.scss";
import Quote from "./Quote/Quote";
import { getData } from "../../utils";
import { nanoid } from "nanoid";

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);
  const asyncFun = async (signal) => {
    const response = await getData("/api/quotes", signal);

    //set the state as an array of quotes
    setQuotes(response.data.quotes);
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
        <div className={style.Title}>
            <h1>Quotes</h1>
        </div>
      <div className={style.Quotes}>
        {quotes.length > 0
          ? quotes.map((q) => <Quote key={nanoid()} quoteData={q} />)
          : "loading..."}
      </div>
    </div>
  );
};

export default Quotes;
