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
      {/* <div className={style.PriceContainer}>
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
      <div className={style.LockPrice}>
        <AiFillLock />
        <h3>Lock this price</h3>
      </div>
      <div className={style.TextContainer}>
        <p>{text}</p>
      </div>
      <div className={style.Separator}></div>
      <div className={style.CoverageAndTerm}>
        <div className={style.Coverage}>
          <h5>Coverage</h5>
          <h1>${coverage}</h1>
        </div>
        <div className={style.Term}>
          <h5>Term</h5>
          <h1>{term} Years</h1>
        </div>
      </div> */}
    </div>
  );
};

export default Quote;
