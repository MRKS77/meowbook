import { userAPI } from "../api/api";
import { updateObjInArray } from "../utils/object-helpers";

const FOLLOW = "users/FOLLOW";
const UNFOLLOW = "users/UNFOLLOW";
const SET_USERS = "users/SET-USERS";
const CHANGE_PAGE = "users/CHANGE-PAGE";
const TOTAL_COUNT = "users/TOTAL-COUNT";
const TOGGLE_FETCHING = "users/TOGGLE-FETCHING";
const TOGGLE_FOLLOWING = "users/TOGGLE-FOLLOWING";

let initialState = {
  users: [
    // {id: 0, followed: true, firstName: 'John', lastName: 'D.',
    // location: {country: 'US', cityName: 'Miami'},
    // photoURL: 'https://bipbap.ru/wp-content/uploads/2017/08/4-35.jpg',
    // status: "I'm so happy!!!"},
    // {id: 1, followed: true, firstName: 'Sophia', lastName: 'O.',
    // location: {country: 'Ukraine', cityName: 'Kiev'},
    // photoURL: 'http://hypeava.ru/uploads/posts/2018-04/1523649151_1.jpg',
    // status: "sunny day"},
    // {id: 2, followed: false, firstName: 'Rick', lastName: 'R.',
    // location: {country: 'UK', cityName: 'London'},
    // photoURL: 'https://i.pinimg.com/736x/3f/47/b3/3f47b39a801290271ad789d1ecc053cc.jpg',
    // status: "My cat loves piano"},
    // {id: 3, followed: true, firstName: 'Tanya', lastName: 'L.',
    // location: {country: 'Russia', cityName: 'Moscow'},
    // photoURL: 'https://avatarko.ru/img/kartinka/2/zhivotnye_kot_galstuk_1881.jpg',
    // status: "new cat ninja game is soon...yeeeeaaaah"},
    // {id: 4, followed: false, firstName: 'Mini', lastName: 'M.',
    // location: {country: 'France', cityName: 'Paris'},
    // photoURL: 'https://meragor.com/files/styles//ava_800_800_wm/1_9.jpg',
    // status: "Hi"},
    // {id: 5, followed: true, firstName: 'Bob', lastName: 'M.',
    // location: {country: 'US', cityName: 'Los Angeles'},
    // photoURL: 'https://demotivation.ru/wp-content/uploads/2020/08/unnamed-1.jpg',
    // status: "look at my new post!"},
    // {id: 6, followed: false, firstName: 'Louis', lastName: 'A.',
    // location: {country: 'Japan', cityName: 'Tokyo'},
    // photoURL: 'https://i1.wp.com/andrey-eltsov.ru/wp-content/uploads/2017/09/SmehAva10.jpg',
    // status: "Ooooo, moia oborona!"},
    // {id: 7, followed: false, firstName: 'Nastya', lastName: 'D.',
    // location: {country: 'Belarus', cityName: 'Brest'},
    // photoURL: 'https://meragor.com/files/styles//ava_800_800_wm/_2_9.jpg',
    // status: ";)"}
  ],
  currentPage: 1,
  totalCount: 23,
  pageSize: 10,
  isFetching: false,
  isFollowing: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjInArray(state.users, action.userId, "id", {
          followed: true,
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: updateObjInArray(state.users, action.userId, "id", {
          followed: false,
        }),
      };

    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
      };

    case TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.totalCount,
      };

    case CHANGE_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };

    case TOGGLE_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };

    case TOGGLE_FOLLOWING:
      return {
        ...state,
        isFollowing: action.isFetching
          ? [...state.isFollowing, action.userId]
          : state.isFollowing.filter((id) => id !== action.userId),
      };

    default:
      return state;
  }
};

export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const changePage = (currentPage) => ({ type: CHANGE_PAGE, currentPage });
export const setTotalCount = (totalCount) => ({
  type: TOTAL_COUNT,
  totalCount,
});
export const toggleFetching = (isFetching) => ({
  type: TOGGLE_FETCHING,
  isFetching,
});
export const toggleFollowing = (isFetching, userId) => ({
  type: TOGGLE_FOLLOWING,
  isFetching,
  userId,
});

export const getUsers = (currentPage, pageSize) => async (dispatch) => {
  dispatch(toggleFetching(true));

  let data = await userAPI.getUsers(currentPage, pageSize);

  dispatch(toggleFetching(false));
  dispatch(setUsers(data.items));
  dispatch(setTotalCount(data.totalCount));
};

const followUnfollowFlow = async (dispatch, userId, action, apiMethod) => {
  dispatch(toggleFollowing(true, userId));

  let response = await apiMethod(userId);

  if (response.data.resultCode === 0) {
    dispatch(action(userId));
  }
  dispatch(toggleFollowing(false, userId));
};

export const follow = (userId) => async (dispatch) => {
  followUnfollowFlow(
    dispatch,
    userId,
    followSuccess,
    userAPI.follow.bind(userAPI)
  );
};

export const unfollow = (userId) => async (dispatch) => {
  followUnfollowFlow(
    dispatch,
    userId,
    unfollowSuccess,
    userAPI.unfollow.bind(userAPI)
  );
};

// export const getUsers = (currentPage, pageSize) => {
//   return (dispatch) => {
//     dispatch(toggleFetching(true));
//     userAPI.getUsers(currentPage, pageSize).then((data) => {
//       dispatch(toggleFetching(false));
//       dispatch(setUsers(data.items));
//       dispatch(setTotalCount(data.totalCount));
//     });
//   };
// };

// export const follow = (userId) => {
//   return (dispatch) => {
//     dispatch(toggleFollowing(true, userId));
//     userAPI.follow(userId).then((response) => {
//       if (response.data.resultCode === 0) {
//         dispatch(followSuccess(userId));
//       }
//       dispatch(toggleFollowing(false, userId));
//     });
//   };
// };

// export const unfollow = (userId) => {
//   return (dispatch) => {
//     dispatch(toggleFollowing(true, userId));
//     userAPI.unfollow(userId).then((response) => {
//       if (response.data.resultCode === 0) {
//         dispatch(unfollowSuccess(userId));
//       }
//       dispatch(toggleFollowing(false, userId));
//     });
//   };
// };

export default usersReducer;
