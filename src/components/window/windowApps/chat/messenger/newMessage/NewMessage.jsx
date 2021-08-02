import React from "react";
import s from "./NewMessage.module.css";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../../../../common/formControls/FormControls";
import { required, maxLength, minLength } from '../../../../../../utils/validators/validators'

const maxLength300 = maxLength(300);
const minLength3 = minLength(3);

const NewMessage = (props) => {
  // let addMessage = () => {
  //   return props.addMessage();
  // };

  // let onMessageChange = (e) => {
  //   let text = e.target.value;
  //   return props.updateNewMessageText(text);
  // };

  // let deleteNewTextMessage = () => {
  //   return props.deleteNewTextMessage();
  // };

  return (
    <form onSubmit={props.handleSubmit} className={s.new}>
      <Field
        className={s.area}
        placeholder="Enter your message here..."
        component={Textarea}
        name={"newMessage"}
        validate={[required, maxLength300, minLength3]}
      />
      <div className={s.buttons}>
        <button className={s.submitBut}>
          Send
        </button>
        {/* <button className={s.deleteBut} onClick={deleteNewTextMessage}>
          Delete
        </button> */}
      </div>
    </form>
  );
};

export default reduxForm({form: 'newMessage'})(NewMessage);
