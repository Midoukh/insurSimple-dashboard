import React from "react";
import Image from "next/image";
import style from "./style.module.scss";
import { lockIcon } from "./constants";

const Quote = ({ quoteData }) => {
  const { price, company, text, coverage, term } = quoteData;

  //this code take the int and fractional part from a price
  const [priceInt, priceFr] = [
    Math.floor(price),
    (price % 1).toFixed(2).replace("0", ""),
  ];

  //parse coverage to a currency string
  const parsedCoverage = coverage
    .toString()
    .replace(/\d(?=(\d{3})+\.)/g, "$&,");
  const money = new Intl.NumberFormat().format(coverage);

  return (
    <div className={style.Container}>
      <div className={style.PriceContainer}>
        <div className={style.Price}>
          <span>$</span>
          <h1>{priceInt}</h1>
          <div>
            <span>{priceFr}</span>
            <span>/mo</span>
          </div>
        </div>
        <Image
          src={require(`../../../public/assets/${company.logo}`)}
          alt={`${company.name}`}
        />
      </div>
      <div className={style.LockPrice}>
        <Image src={lockIcon} alt="lock" />
        <h3>Lock this price</h3>
      </div>
      <div className={style.TextContainer}>
        <p>{text}</p>
      </div>
      <div className={style.Separator}>
        <div></div>
      </div>
      <div className={style.CoverageAndTerm}>
        <div className={style.Coverage}>
          <h5>Coverage</h5>
          <h1>${money}</h1>
        </div>
        <div className={style.Term}>
          <h5>Term</h5>
          <h1>{term} Years</h1>
        </div>
      </div>
    </div>
  );
};

export default Quote;
