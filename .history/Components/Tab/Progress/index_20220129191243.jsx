import React, { useEffect } from "react";
import style from "./style.module.scss";
import { getData } from "../../../utils";
const Progress = () => {
  // const asyncFunc = (signal) => {

  // }
  useEffect(() => {
    // const abort = new AbortController()
    // const signal = abort.controller
    // asyncFunc(signal)
    // return () => abort.
  }, []);
  return (
    <div className={style.Container}>
      <div className={style.Title}>
        <h1>Progress</h1>
      </div>
    </div>
  );
};

export default Progress;
