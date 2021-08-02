import React, { useState } from "react";
import s from "./ProfileHeader.module.css";
import ProfileHeaderAvatar from "./profileHeaderAvatar/ProfileHeaderAvatar";
import ProfileInfo from "./userInfo/ProfileInfo";
import ProfileContacts from "./userContacts/ProfileContacts";
import ProfileEditForm from "./profileEditForm/ProfileEditForm";

const ProfileHeader = (props) => {
  let [editMode, setEditMode] = useState(false);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
  };
  return (
    <div>
      {editMode === false && (
        <div>
          <div className={s.wrapper}>
            <ProfileHeaderAvatar
              savePhoto={props.savePhoto}
              isOwner={props.isOwner}
              avatar={props.userProfile.photos.large}
            />
            <ProfileInfo
              userProfile={props.userProfile}
              status={props.status}
              updateStatus={props.updateStatus}
              isOwner={props.isOwner}
              activateEditMode={activateEditMode}
            />
          </div>
          <ProfileContacts
            contacts={props.userProfile.contacts}
            contactsTemp={props.contactsTemp}
          />
        </div>
      )}

      {editMode === true && (
        <div>
          <ProfileEditForm
            contactsTemp={props.contactsTemp}
            initialValues={props.userProfile}
            deactivateEditMode={deactivateEditMode}
            saveProfile={props.saveProfile}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileHeader;
