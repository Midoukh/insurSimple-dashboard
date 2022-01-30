import React, { useState } from "react";
import style from "./style.module.scss";

const Accordion = ({ heading, content }) => {
  const [isActive, setIsActive] = useState(false);

  const handleToggleAccordion = () => {
    setIsActive(!isActive);
  };

  return (
    <li className={style.AccordionItem}>
      <div className={style.AccordionToggle} onClick={handleToggleAccordion}>
        <h3>{heading}</h3>
        <span>{isActive ? "-" : "+"}</span>
      </div>
      {isActive && <p className={style.AccordionContent}>{content}</p>}
    </li>
  );
};

export default Accordion;
