import React from "react";

import style from "./style.module.scss";
import { callIcon } from "./constants";

const Footer = () => {
  return (
    <footer className={style.Footer}>
      <div>
        <h4>Your privacy & security are serious matters</h4>
        <h5>Read our Privacy Policy & Terms of Service.</h5>
      </div>
      <div>
        <h4>Questions?</h4>
        <h5>Talk to a licensed Simply Insured expert.</h5>
      </div>
      <div></div>
    </footer>
  );
};

export default Footer;
