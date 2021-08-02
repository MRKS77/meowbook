import React from "react";
import s from "./NewPost.module.css";
import { reduxForm } from "redux-form";
import {
  maxLength,
  minLength,
  required,
} from "../../../../../../../utils/validators/validators";
import {
  fieldCreator,
  Textarea,
} from "../../../../../../common/formControls/FormControls";

const maxLength300 = maxLength(300);
const minLength3 = minLength(3);

const NewPost = (props) => {
  // let addPost = () => {
  //   return props.addPost();
  // };

  // let onPostChange = (e) => {
  //   let text = e.target.value;
  //   return props.onPostChange(text);
  // };

  // let deletePostText = () => {
  //   return props.deletePostText();
  // };
  return (
    <form onSubmit={props.handleSubmit} className={s.newPost}>
      {fieldCreator(
        Textarea,
        "newPost",
        "Enter your post here...",
        [required, minLength3, maxLength300],
        null,
        s.post
      )}
      <div className={s.buttons}>
        <button className={s.submitBut}>Post</button>
        {/* <button className={s.deleteBut} onClick={deletePostText}>
          Delete
        </button> */}
      </div>
    </form>
  );
};

export default reduxForm({ form: "newPost" })(NewPost);
