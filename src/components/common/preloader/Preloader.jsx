import React from "react";
import loader from "../../../assets/images/three-dots.svg";
import s from "./Preloader.module.css";

const Preloader = (props) => {
  return (
    <div className={s.main}>
      <img src={loader} alt="loading" className={s.loader} />
    </div>
  );
};

export default Preloader;
