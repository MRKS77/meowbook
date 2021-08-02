import React from "react";
import s from "./ProfileDescrip.module.css";

const ProfileDescrip = (props) => {
  return (
    <div className={s.descrip}>

      <div className={s.info}>
        <div className={s.cls}>About me:</div>
        <div className={s.dat}>{props.userProfile.aboutMe}</div>
      </div>

      <div className={s.info}>
        <div className={s.cls}>
          Looking for a job:
          {props.userProfile.lookingForAJob ? (
            <i
              className={"fas fa-check-circle " + s.yesIcon + " " + s.icon}
            ></i>
          ) : (
            <i className={"fas fa-times-circle " + s.noIcon + " " + s.icon}></i>
          )}
        </div>

        <div className={s.dat}>
          {props.userProfile.lookingForAJobDescription}
        </div>
      </div>

    </div>
  );
};

export default ProfileDescrip;
