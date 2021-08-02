import React from "react";
import Message from "./message/Message";
import s from "./Messenger.module.css";
import NewMessage from "./newMessage/NewMessage";

const Messenger = (props) => {
  return (
    <div className={s.mes}>
      <div className={s.chatBox}>
        {props.messages.map((message) => (
          <Message messages={message} key={message.id} />
        ))}
      </div>
      <NewMessage
        // updateNewMessageText={props.updateNewMessageText}
        onSubmit={props.addMessage}
        // deleteNewTextMessage={props.deleteNewTextMessage}
        // newMessageText={props.newMessageText}
      />
    </div>
  );
};

export default Messenger;
