import React from "react";
import s from "./Post.module.css";
import userDefault from "../../../../../../../assets/images/userDefault.png";

const Post = (props) => {
  return (
    <div>
      <div className={s.upperSide}>
        <div className={s.avatar}>
          <img
            src={props.avatar === null ? userDefault : props.avatar}
            alt="Profile"
          />
        </div>
        <div className={s.text}>{props.posts}</div>
      </div>
      <div className={s.lowerSide}>
        <div className={s.like}>
          <button>Like</button>
          <div className={s.likeCounter}>
            {props.likes}
            <span>
              <i className="fas fa-heart"></i>
            </span>
          </div>
        </div>
        <button>Repost</button>
      </div>
      <hr className={s.stick} />
    </div>
  );
};

export default Post;
