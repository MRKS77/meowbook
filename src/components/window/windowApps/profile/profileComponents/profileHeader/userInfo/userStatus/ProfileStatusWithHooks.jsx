import React, { useState, useEffect } from "react";
import s from "./ProfileStatus.module.css";

const ProfileStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
  };

  const updateStatus = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.target.value);
  };

  useEffect(() => {setStatus(props.status)}, [props.status]);

  return (
    <div className={s.block}>
      <div className={s.statusHeader}>
        <div className={s.cls}>Status:</div>
        {!editMode && props.isOwner && (
          <i onClick={activateEditMode} className={"fas fa-cog " + s.icon} title='Change Status'></i>
        )}
      </div>
      <div className={s.dat}>
        {!editMode && !props.isOwner && (
          <div>{props.status}</div>
        )}
        {!editMode && props.isOwner && (
          <div onDoubleClick={activateEditMode} title='Change Status' className={s.status}>{props.status}</div>
        )}
        {editMode && props.isOwner && (
          <div className={s.updStatus}>
            <input
              onChange={onStatusChange}
              value={status}
              autoFocus={true}
            ></input>
            <button onClick={updateStatus}>Update</button>
            <i className="fas fa-times" onClick={deactivateEditMode}></i>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileStatusWithHooks;
