import React from "react";
import Image from "next/image";
import { AiFillLock } from "react-icons/fa";

import style from "./style.module.scss";
import { companiesLogos } from "./constants";
const Quote = ({ quoteData }) => {
  console.log(quoteData);
  const { price, company, text, coverage, term } = quoteData;

  //this code take the int and frectional part from a price
  const [priceInt, priceFr] = [
    Math.floor(price),
    (price % 1).toFixed(2).replace("0", ""),
  ];
  console.log(priceInt, priceFr);
  return (
    <div className={style.Container}>
      <div className={style.PriceContainer}>
        <div className={style.Price}>
          <span>$</span>
          <h1>{priceInt}</h1>
          <span>{priceFr}</span>
          <span>/mo</span>
        </div>
        <Image
          src={require(`../../../public/assets/${company.logo}`)}
          alt={`${company.name}`}
        />
      </div>
    </div>
  );
};

export default Quote;
