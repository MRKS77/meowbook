import React from "react";
import s from "./UserBlock.module.css";
import userDefault from "../../../../../assets/images/userDefault.png";
import { NavLink } from "react-router-dom";

export const UserBlockAvatar = ({ userId, photoSmall }) => {
  return (
    <div className={s.avadiv}>
      <NavLink className={s.nav} to={"/profile/" + userId}>
        <img
          src={photoSmall === null ? userDefault : photoSmall}
          alt=""
          className={s.avatar}
        />
      </NavLink>
    </div>
  );
};

export const UserBlockInfo = ({ name, status, location }) => {
  return (
    <div className={s.userInfo}>
      <div className={s.nameStatus}>
        <div className={s.name}>{name}</div>
        <div className={s.status}>{status}</div>
      </div>
      <div className={s.location}>
        <div>{location === undefined ? "World" : location.country}</div>
        <div className={s.cityLocation}>
          {location === undefined ? "unknown" : location.city}
        </div>
      </div>
    </div>
  );
};

export const UserBlockButtons = ({ followed, isFollowing, userId, unfollow, follow }) => {
  return (
    <div className={s.buttons}>
      {followed === true ? (
        <button
          className={s.unfolBut}
          disabled={isFollowing.some((id) => id === userId)}
          onClick={() => {
            unfollow(userId);
          }}
        >
          Unfollow
        </button>
      ) : (
        <button
          className={s.folBut}
          disabled={isFollowing.some((id) => id === userId)}
          onClick={() => {
            follow(userId);
          }}
        >
          Follow
        </button>
      )}
    </div>
  );
};