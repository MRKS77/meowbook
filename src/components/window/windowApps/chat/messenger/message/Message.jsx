import React from "react";
import s from "./Message.module.css";

const Message = (props) => {
  return (
    <div className={s.me + " " + s[props.messages.user]}>
      <div className={s.photoPlace} />
      <div className={s.space} />
      <div className={s.text}>{props.messages.text}</div>
    </div>
  );
};
export default Message;
