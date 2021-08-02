import React from "react";
import ProfileDescrip from "./userDescrip/ProfileDescrip";
import s from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./userStatus/ProfileStatusWithHooks";

const ProfileInfo = (props) => {
  return (
    <div className={s.userBlank}>
      <div className={s.userName}>
        <h2>
          {props.userProfile.fullName}
          {props.isOwner && (
            <span className={s.editPageBut} onClick={props.activateEditMode}>
              Edit page <i className={"fas fa-user-cog " + s.editPageIcon}></i>
            </span>
          )}
        </h2>
      </div>
      <ProfileDescrip userProfile={props.userProfile} />
      <ProfileStatusWithHooks
        status={props.status}
        updateStatus={props.updateStatus}
        isOwner={props.isOwner}
      />
    </div>
  );
};

export default ProfileInfo;
