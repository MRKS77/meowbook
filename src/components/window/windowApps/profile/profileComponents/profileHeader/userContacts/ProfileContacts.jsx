import React from "react";
import s from "./ProfileContacts.module.css";

const ProfileContacts = (props) => {
  for (let prop in props.contacts) {
    if ((props.contacts[prop] !== null) & (props.contacts[prop] !== ""))
      return (
        <div>
          <hr className={s.stick} />
          <h3 className={s.header}>Contacts</h3>
          <div className={s.list}>
            {Object.keys(props.contacts).map((c) =>
              (props.contacts[c] !== null) & (props.contacts[c] !== "") ? (
                <div className={s.block} key={c}>
                  <div className={s.refName}>{props.contactsTemp[c]}</div>
                  <a href={props.contacts[c]} className={s.ref} rel="noreferrer" target="_blank">
                    {props.contacts[c]}
                  </a>
                </div>
              ) : null
            )}
          </div>
        </div>
      );
  }
  return <div></div>;
};

export default ProfileContacts;
