import React from "react";
import Image from "next/image";
import style from "./style.module.scss";

const Quote = ({ quoteData }) => {
  const { price, company, text, coverage, term } = quoteData;
  const [priceInt, priceFr] = price.split(",");
  return (
    <div className={style.Container}>
      <div className={style.PriceContainer}>
        <div className={style.Price}>
          <span>$</span>
          <h1>{priceInt}</h1>
          <span>{priceFr}</span>
          <span>/mo</span>
        </div>
        <Image src={company.logo} alt={`${company.logo}`} />
      </div>
    </div>
  );
};

export default Quote;
