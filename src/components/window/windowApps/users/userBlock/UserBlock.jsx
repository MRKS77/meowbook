import React from "react";
import s from "./UserBlock.module.css";
import {
  UserBlockAvatar,
  UserBlockInfo,
  UserBlockButtons,
} from "./UserBlockComponents";

const UserBlock = ({user, isFollowing, unfollow, follow}) => {
  return (
    <div className={s.block}>
      <UserBlockAvatar
        userId={user.id}
        photoSmall={user.photos.small}
      />
      <UserBlockInfo
        name={user.name}
        status={user.status}
        location={user.location}
      />
      <UserBlockButtons
        followed={user.followed}
        isFollowing={isFollowing}
        userId={user.id}
        unfollow={unfollow}
        follow={follow}
      />
    </div>
  );
};

export default UserBlock;
