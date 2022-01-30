import React from "react";
import Image from "next/image";

import style from "./style.module.scss";
import { callIcon } from "./constants";

const Footer = () => {
  return (
    <footer className={style.Container}>
      <div>
        <h4>Your privacy & security are serious matters</h4>
        <h5>
          Read our <span>Privacy Policy</span> & <span>Terms of Service</span>.
        </h5>
      </div>
      <div>
        <h4>Questions?</h4>
        <h5>Talk to a licensed Simply Insured expert.</h5>
      </div>
      <div>
        <h4>
          Call: <span className={style.Number}>1-855-123-1234</span>
        </h4>
        <div className={style.CallNow}>
          <h5>Chat Now</h5>
          <Image src={callIcon} alt="call now" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
