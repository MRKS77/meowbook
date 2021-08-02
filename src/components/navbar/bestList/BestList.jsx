import s from "./BestList.module.css";
import React from "react";
import BestListItem from "./bestListItem/BestListItem";

const BestList = (props) => {
  return (
    <div className={s.block}>
      {props.topFriends.map((friend) => (
        <BestListItem
          name={friend.name}
          avatar={friend.avatar}
          key={friend.id}
        />
      ))}
    </div>
  );
};

export default BestList;
