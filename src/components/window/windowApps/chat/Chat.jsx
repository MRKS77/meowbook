import React from "react";
import { withAuthRedirect } from "../../../../hoc/withAuthRedirect";
import s from "./Chat.module.css";
import DialogsContainer from "./dialogs/DialogsContainer";
import MessengerContainer from "./messenger/MessengerContainer";

const Chat = (props) => {
  return (
    <div className={s.chat}>
      <DialogsContainer />
      <MessengerContainer />
    </div>
  );
};

export default withAuthRedirect(Chat);
