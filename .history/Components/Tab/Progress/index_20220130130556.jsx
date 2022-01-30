import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import { getData, patchData } from "../../../utils";
import Accordion from "./Accordion/Accordion";
import { nanoid } from "nanoid";

const Progress = () => {
  const [progressData, setProgressData] = useState([]);
  const asyncFuncGet = async (signal = null) => {
    //check local strarge for data first if not make a get req
    const data = localStorage.getItem("progress") || [];

    if (data.length) {
      setProgressData(data);
      return;
    }

    const response = await getData("/api/progress", signal);

    setProgressData((prev) => response.data.progress);
  };
  const asyncFuncPatch = async (id, approved) => {
    const response = await patchData("/api/progress", id, approved);

    //save progress data to local Storage
    localStorage.setItem("progress", JSON.stringify(response.data.progress));

    //get the new data
    asyncFuncGet();
    console.log("**", response);
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
                handleApprovedProgress={() =>
                  asyncFuncPatch(p.id, !p.completed)
                }
              />
            ))
          : "Loading..."}
      </ul>
    </div>
  );
};

export default Progress;
