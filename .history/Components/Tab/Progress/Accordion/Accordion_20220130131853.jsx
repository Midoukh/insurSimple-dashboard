import React, { useState } from "react";
import Image from "next/image";
import style from "./style.module.scss";
import { approvedIcon } from "./constants";

const Accordion = ({ heading, content, approved, handleApprovedProgress }) => {
  const [isActive, setIsActive] = useState(false);

  const handleToggleAccordion = () => {
    setIsActive(!isActive);
  };

  const integratedClassHeading = approved
    ? [style.Heading, "approved-progress"].join(" ")
    : style.Heading;
  const integratedClassOval = approved
    ? [style.Oval, "approved-progress-oval"].join(" ")
    : style.Oval;
  return (
    <li className={style.AccordionItem}>
      <div className={style.AccordionToggle}>
        <div className={integratedClassHeading}>
          <div className={integratedClassOval} onClick={handleApprovedProgress}>
            {approved && <Image src={approvedIcon} alt="approved" />}
          </div>
          <h3>{heading}</h3>
        </div>
        <span onClick={handleToggleAccordion}>{isActive ? "-" : "+"}</span>
      </div>
      {isActive && <div className={style.AccordionContent}>{content}</div>}
    </li>
  );
};

export default Accordion;
