import React from "react";
import s from "./Profile.module.css";
import ProfileHeader from "./profileComponents/profileHeader/ProfileHeader";
import ProfileWallContainer from "./profileComponents/profileWall/ProfileWallContainer";
import Preloader from "../../../common/preloader/Preloader";

const Profile = (props) => {
  if (!props.userProfile) {
    return <Preloader />;
  }
  return (
    <div>
      <ProfileHeader
        userProfile={props.userProfile}
        contactsTemp={props.contactsTemp}
        status={props.status}
        updateStatus={props.updateStatus}
        isOwner={props.isOwner}
        savePhoto={props.savePhoto}
        saveProfile={props.saveProfile}
      />
      <hr className={s.stick} />
      <ProfileWallContainer />
    </div>
  );
};

export default Profile;
