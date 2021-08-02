import React, { useEffect, useState } from "react";
import {
  fieldCreator,
  Input,
  Textarea,
} from "../../../../../../common/formControls/FormControls";
import { required } from "../../../../../../../utils/validators/validators";
import s from "./ProfileEditForm.module.css";
import { reduxForm } from "redux-form";

const ProfileEdit = ({ handleSubmit, error, contactsTemp }) => {
  let [contacts, setContacts] = useState(0);
  useEffect(() => {
    setContacts(contactsTemp);
  }, [contactsTemp]);

  return (
    <form onSubmit={handleSubmit} className={s.wrapper}>
      <div className={s.block}>
        <label className={s.formLabels}>
          <span className={s.descrip}>Full Name:</span>
          {fieldCreator(
            Input,
            "fullName",
            "Full name",
            [required],
            null,
            s.formControl
          )}
        </label>
      </div>
      <div className={s.block}>
        <label className={s.formLabels}>
          <span className={s.descrip}>Looking for a job:</span>
          {fieldCreator(
            Input,
            "lookingForAJob",
            null,
            null,
            "checkbox",
            s.check
          )}
        </label>
      </div>
      <div className={s.block}>
        <label className={s.formLabels}>
          <span className={s.descrip}>About me:</span>
          {fieldCreator(
            Textarea,
            "aboutMe",
            "About me",
            null,
            null,
            s.formControl + " " + s.textForm
          )}
        </label>
      </div>
      <div className={s.block}>
        <label className={s.formLabels}>
          <span className={s.descrip}>Looking for a job description:</span>
          {fieldCreator(
            Textarea,
            "lookingForAJobDescription",
            "Your description",
            null,
            null,
            s.formControl + " " + s.textForm
          )}
        </label>
      </div>

      <h2 className={s.headerContacts}>Contacts</h2>

      {Object.keys(contacts).map((c) => (
        <div className={s.block} key={c}>
          <label className={s.formLabels}>
            <span className={s.descrip}>{contacts[c]}:</span>
            {fieldCreator(
              Input,
              "contacts." + [c],
              contacts[c],
              null,
              null,
              s.formControl
            )}
          </label>
        </div>
      ))}
      {error && <div className={s.error}>{error}</div>}
      <div className={s.subBut}>
        <button>Submit</button>
      </div>
    </form>
  );
};

const ProfileEditRedux = reduxForm({ form: "profileEdit" })(ProfileEdit);

const ProfileEditForm = (props) => {
  const onSubmit = (formData) => {
    // console.log(formData);
    props.saveProfile(formData);
  };

  return (
    <div className={s.main}>
      <h1 className={s.setHeader}>
        Profile Settings
        <span className={s.editPageBut} onClick={props.deactivateEditMode}>
          Cancel <i className={"fas fa-user " + s.editPageIcon}></i>
        </span>
      </h1>
      <ProfileEditRedux
        contactsTemp={props.contactsTemp}
        initialValues={props.initialValues}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default ProfileEditForm;

// component,
//   name,
//   placeholder,
//   validators,
//   type,
//   className,
//   props = {}
