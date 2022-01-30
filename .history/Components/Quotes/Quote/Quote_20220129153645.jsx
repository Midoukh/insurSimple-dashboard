import React from "react";
import Image from "next/image";
import { AiFillLock } from "react-icons/fa";

import style from "./style.module.scss";

const Quote = ({ quoteData }) => {
  console.log(quoteData);
  const { price, company, text, coverage, term } = quoteData;
  // const [priceInt, priceFr] = []
  console.log(Math.floor(price));
  console.log(price % 1);
  return (
    <div className={style.Container}>
      {/* <div className={style.PriceContainer}>
        <div className={style.Price}>
          <span>$</span>
          <h1>{priceInt}</h1>
          <span>{priceFr}</span>
          <span>/mo</span>
        </div>
        <Image src={company.logo} alt={`${company.logo}`} />
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
