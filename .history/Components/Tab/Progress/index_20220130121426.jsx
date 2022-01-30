import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import { getData, patchData } from "../../../utils";
import Accordion from "./Accordion/Accordion";
import { nanoid } from "nanoid";

const Progress = () => {
  const [progressData, setProgressData] = useState([]);
  const asyncFuncGet = async (signal) => {
    const response = await getData("/api/progress", signal);

    setProgressData((prev) => response.data.progress);
  };
  const asyncFuncPatch = async (id) => {
    // const response = await patchData("/api/progress", id);

    console.log(id);
  };
  useEffect(() => {
    const abort = new AbortController();
    const signal = abort.controller;
    asyncFuncGet(signal);
    return () => abort.abort();
  }, []);
  return (
    <div className={style.Container}>
      <div className={style.Title}>
        <h1>Progress</h1>
      </div>
      <ul className={style.ListOfAccordions}>
        {progressData.length > 0
          ? progressData.map((p) => (
              <Accordion
                key={nanoid()}
                heading={p.label}
                content={p.content}
                approved={p.completed}
                handleApprovedProgress={() => asyncFuncPatch(p.id)}
              />
            ))
          : "Loading..."}
      </ul>
    </div>
  );
};

export default Progress;
