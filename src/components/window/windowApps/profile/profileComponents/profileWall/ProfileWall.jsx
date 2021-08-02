import React from "react";
import Post from "./post/Post";
import s from "./ProfileWall.module.css";
import NewPost from "./newPost/NewPost";

const ProfileWall = (props) => {
  return (
    <div>
      <NewPost
        onSubmit={props.addPost}
        // addPost={props.addPost}
        // onPostChange={props.onPostChange}
        // deletePostText={props.deletePostText}
        // newPostText={props.newPostText}
      />

      <hr className={s.stick} />

      <div className={s.wall}>
        {props.posts.map((post) => (
          <Post
            posts={post.post}
            likes={post.likes}
            key={post.id}
            avatar={props.avatar}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfileWall;
