import React, { useState } from "react";
import Image from "next/image";
import style from "./style.module.scss";
import { approvedIcon } from "./constants";

const Accordion = ({ heading, content, approved }) => {
  const [isActive, setIsActive] = useState(false);

  const handleToggleAccordion = () => {
    setIsActive(!isActive);
  };

  const integratedClassHeading = approved
    ? [style.Heading, "approved-progress"].join(" ")
    : style.Heading;
  const integratedClassOval = approved
    ? [style.oveal, "approved-progress-oval"].join(" ")
    : style.oveal;
  return (
    <li className={style.AccordionItem}>
      <div className={style.AccordionToggle} onClick={handleToggleAccordion}>
        <div className={integratedClassHeading}>
          <div className={style.integratedClassOval}>
            <Image src={approvedIcon} alt="approved" />
          </div>
          <h3>{heading}</h3>
        </div>
        <span>{isActive ? "-" : "+"}</span>
      </div>
      {isActive && <div className={style.AccordionContent}>{content}</div>}
    </li>
  );
};

export default Accordion;
