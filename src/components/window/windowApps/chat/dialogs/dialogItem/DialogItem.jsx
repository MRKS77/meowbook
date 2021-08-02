import React from "react";
import s from "./DialogItem.module.css";

const DialogItem = (props) => {
  return (
    <div className={s.di}>
      {props.dialogs.name}
      <img src={props.dialogs.avatar} alt="avatar" />
    </div>
  );
};

export default DialogItem;
