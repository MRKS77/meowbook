// import React from 'react';
import ProfileWall from "./ProfileWall";
import {
  addPostActionCreator,
  // deleteNewPostTextActionCreator,
  // updateNewPostTextActionCreator,
} from "../../../../../../redux/profileReducer";
import { connect } from "react-redux";
import { reset } from 'redux-form';

// const NewPostContainer = (props) => {
//     let addPost = () => {
//         props.store.dispatch( addPostActionCreator() );
//     }

//     let onPostChange = (text) => {
//         props.store.dispatch( updateNewPostTextActionCreator(text) );
//     }

//     let deletePostText = () => {
//         props.store.dispatch( deleteNewPostTextActionCreator() );
//     }

//     return <NewPost addPost={addPost}
//         onPostChange={onPostChange}
//         deletePostText={deletePostText}
//         newPostText={props.store.getState().profilePage.newPostText} />
// }

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
    avatar: state.profilePage.userProfile.photos.small,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (values) => {
      dispatch(addPostActionCreator(values.newPost));
      dispatch(reset("newPost"));
    },
    // onPostChange: (text) => {
    //   dispatch(updateNewPostTextActionCreator(text));
    // },
    // deletePostText: () => {
    //   dispatch(deleteNewPostTextActionCreator());
    // },
  };
};

const ProfileWallContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileWall);

export default ProfileWallContainer;
