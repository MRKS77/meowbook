import React from "react";
import DialogItem from "./dialogItem/DialogItem";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const Dialogs = (props) => {
  return (
    <div className={s.dia}>
      <div className={s.start}>All chats</div>
      {props.dialogs.map((dialog) => (
        <NavLink
          to={"/chat/" + dialog.id}
          className={s.navli}
          activeClassName={s.active}
          key={dialog.id}
        >
          <DialogItem dialogs={dialog} />
        </NavLink>
      ))}
    </div>
  );
};

export default Dialogs;
