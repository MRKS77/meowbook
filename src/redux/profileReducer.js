import { profileAPI } from "../api/api";
import { toggleFetching } from "./usersReducer";
import { stopSubmit } from "redux-form";

const ADD_POST = "profile/ADD-POST";
// const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
// const DELETE_NEW_POST_TEXT = "DELETE-NEW-POST-TEXT";
const SET_USER_PROFILE = "profile/SET-USER-PROFILE";
const SET_STATUS = "profile/SET-STATUS";
const SAVE_PHOTO_SUCCESS = 'profile/SAVE-PHOTO-SUCCESS'

let initialState = {
  posts: [
    {
      id: 0,
      post: "Hello World!",
      likes: 8,
    },
    { id: 1, post: "This is my new WebSite!", likes: 63 },
    {
      id: 2,
      post: "This is my new song! Meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meooooooooooow!!!",
      likes: 233,
    },
  ],
  // userProfile: {
  //     firstName: 'Black',
  //     lastName: 'Tiger',
  //     sex: 'Male',
  //     age: '24',
  //     location: 'World'
  // },
  userProfile: null,
  // newPostText: "",
  contactsTemp: {
    facebook: "Facebook",
    website: "Website",
    vk: "VK",
    twitter: "Twitter",
    instagram: "Instagram",
    youtube: "YouTube",
    github: "GitHub",
    mainLink: "MainLink",
  },
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: state.posts.length,
        post: action.post,
        likes: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };

    // case UPDATE_NEW_POST_TEXT:
    //   return {
    //     ...state,
    //     newPostText: action.newText,
    //   };

    // case DELETE_NEW_POST_TEXT:
    //   return {
    //     ...state,
    //     newPostText: "",
    //   };

    case SET_USER_PROFILE:
      return {
        ...state,
        userProfile: { ...action.profile },
      };

    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };

    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        userProfile: { ...state.userProfile, photos: action.photos },
      };

    default:
      return state;
  }
};

export const addPostActionCreator = (post) => ({ type: ADD_POST, post });
// export const updateNewPostTextActionCreator = (text) => ({
//   type: UPDATE_NEW_POST_TEXT,
//   newText: text,
// });
// export const deleteNewPostTextActionCreator = () => ({
//   type: DELETE_NEW_POST_TEXT,
// });
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos });

const profileThunkFlow = async (dispatch, userId, action, apiMethod) => {
  dispatch(toggleFetching(true));

  let response = await apiMethod(userId);

  dispatch(action(response.data));
  dispatch(toggleFetching(false));
};

export const getUserProfile = (userId) => async (dispatch) => {
  profileThunkFlow(
    dispatch,
    userId,
    setUserProfile,
    profileAPI.getProfile.bind(profileAPI)
  );
};

export const getStatus = (userId) => async (dispatch) => {
  profileThunkFlow(
    dispatch,
    userId,
    setStatus,
    profileAPI.getStatus.bind(profileAPI)
  );
};

export const updateStatus = (status) => async (dispatch) => {
  dispatch(toggleFetching(true));

  let response = await profileAPI.updateStatus(status);

  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
  dispatch(toggleFetching(false));
};

export const savePhoto = (file) => async (dispatch) => {
  dispatch(toggleFetching(true));
  let response = await profileAPI.savePhoto(file);

  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
  dispatch(toggleFetching(false));
};

export const saveProfile = (profile) => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  let response = await profileAPI.saveProfile(profile);

  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userId));
  } else {
    let message =
      response.data.messages.length > 0
        ? response.data.messages[0]
        : "Something is wrong";
    dispatch(stopSubmit("profileEdit", { _error: message }));
  }
};

// export const getUserProfile = (userId) => {
//   return (dispatch) => {
//     dispatch(toggleFetching(true));
//     profileAPI.getProfile(userId).then((response) => {
//       dispatch(toggleFetching(false));
//       dispatch(setUserProfile(response.data));
//     });
//   };
// };

// export const getStatus = (userId) => {
//   return (dispatch) => {
//     dispatch(toggleFetching(true));
//     profileAPI.getStatus(userId).then((response) => {
//       dispatch(toggleFetching(false));
//       dispatch(setStatus(response.data));
//     });
//   };
// };

// export const updateStatus = (status) => {
//   return (dispatch) => {
//     dispatch(toggleFetching(true));
//     profileAPI.updateStatus(status).then((response) => {
//       dispatch(toggleFetching(false));
//       if (response.data.resultCode === 0) {
//         dispatch(setStatus(status));
//       }
//     });
//   };
// };

export default profileReducer;
