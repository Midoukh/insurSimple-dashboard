import React, { useEffect } from "react";

import style from "./style.module.scss";

const Quotes = () => {
  const handleGetQuotes = async () => {
    await fetch("/api/quotes", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  useEffect(() => {
    handleGetQuotes();
  }, []);

  return (
    <div className={style.Container}>
      <div className={style.Quotes}></div>
    </div>
  );
};

export default Quotes;
