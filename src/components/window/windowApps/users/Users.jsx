import React from "react";
import UserBlock from "./userBlock/UserBlock";
import Paginator from "../../../common/paginator/Paginator";
import s from "./Users.module.css";

const Users = (props) => {
  return (
    <div className={s.main}>
      <Paginator
        pageSize={props.pageSize}
        totalCount={props.totalCount}
        currentPage={props.currentPage}
        changePage={props.changePage}
        getItems={props.getUsers}
      />

      <div>
        {props.users.map((u) => (
          <UserBlock
            key={u.id}
            user={u}
            follow={props.follow}
            unfollow={props.unfollow}
            toggleFollowing={props.toggleFollowing}
            isFollowing={props.isFollowing}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
