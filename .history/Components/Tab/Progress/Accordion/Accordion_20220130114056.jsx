import React, { useState } from "react";
import style from "./style.module.scss";
import { approvedIcon } from "./constants";

const Accordion = ({ heading, content, approved }) => {
  const [isActive, setIsActive] = useState(false);

  const handleToggleAccordion = () => {
    setIsActive(!isActive);
  };
  const integratedClass = approved
    ? [style.Heading, "approved-progress"].join(" ")
    : style.Heading;
  return (
    <li className={style.AccordionItem}>
      <div className={style.AccordionToggle} onClick={handleToggleAccordion}>
        <div className={style.Heading}>
          <div className={style.Oval}></div>
          <h3>{heading}</h3>
        </div>
        <span>{isActive ? "-" : "+"}</span>
      </div>
      {isActive && <div className={style.AccordionContent}>{content}</div>}
    </li>
  );
};

export default Accordion;
