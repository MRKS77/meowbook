import React from "react";
import s from "./LogoHeader.module.css";

const LogoHeader = (props) => {
  return (
    <div className={s.logo}>
      <div className={s.icon}>
        <i className="fas fa-paw"></i>
      </div>
      <div className={s.brand}>MeowBook</div>
    </div>
  );
};

export default LogoHeader;
