import { getAuthUserData } from "./authReducer";

const INITIALIZED_SUCCESS = "app/INITIALIZED-SUCCESS";

let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };

    default:
      return state;
  }
};

export const initializedSucces = () => ({ type: INITIALIZED_SUCCESS });

export const initializeApp = () => async (dispatch) => {
  let promise = dispatch(getAuthUserData());
  await promise;

  dispatch(initializedSucces());
};

export default appReducer;
