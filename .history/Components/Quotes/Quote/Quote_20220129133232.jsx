import React from "react";
import Image from "next/image";
import style from "./style.module.scss";

const Quote = ({ quoteData }) => {
  const { price, company, text, coverage, term } = quoteData;
  return (
    <div className={style.Container}>
      <div className={style.PriceContainer}>
        <div className={style.Price}></div>
        <Image src={company.logo} alt={`${company.logo}`} />
      </div>
    </div>
  );
};

export default Quote;
