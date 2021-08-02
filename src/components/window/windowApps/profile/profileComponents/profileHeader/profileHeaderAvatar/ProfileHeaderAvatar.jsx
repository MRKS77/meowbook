import React from "react";
import s from "./ProfileHeaderAvatar.module.css";
import userDefault from "../../../../../../../assets/images/userDefault.png";

const ProfileHeaderAvatar = (props) => {

  const onAvatarSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };

  return (
    <div className={s.avatar}>
      <img
        src={props.avatar === null ? userDefault : props.avatar}
        alt="Profile"
      />
      {props.isOwner && (
        <div className={s.changePhotoBox}>
          <label htmlFor="avaLoad">Change photo<div className={s.fakeBut}>Click here to upload File</div></label>
          <input type="file" name="" id="avaLoad" onChange={onAvatarSelected} hidden />
        </div>
      )}
    </div>
  );
};

export default ProfileHeaderAvatar;
