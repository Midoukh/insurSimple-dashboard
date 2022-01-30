import React, { useState } from "react";
import style from "./style.module.scss";
import { approvedIcon } from "./constants";

const Accordion = ({ heading, content }) => {
  const [isActive, setIsActive] = useState(false);

  const handleToggleAccordion = () => {
    setIsActive(!isActive);
  };

  return (
    <li className={style.AccordionItem}>
      <div className={style.AccordionToggle} onClick={handleToggleAccordion}>
        <div className={style.Heading}>
          <h3>{heading}</h3>
        </div>
        <span>{isActive ? "-" : "+"}</span>
      </div>
      {isActive && <div className={style.AccordionContent}>{content}</div>}
    </li>
  );
};

export default Accordion;
