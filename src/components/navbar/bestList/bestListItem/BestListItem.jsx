import React from "react";
import s from "./BestListItem.module.css";

const BestListItem = (props) => {
  return (
    <div className={s.block}>
      <img src={props.avatar} alt="avatar" className={s.avatar} />
      <div>{props.name}</div>
    </div>
  );
};

export default BestListItem;
