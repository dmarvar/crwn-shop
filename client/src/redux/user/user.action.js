import UserActionsTypes from "./user.types";

export const setCurrentUser = user => ({
  type: UserActionsTypes.SET_CURRENT_USER,
  payload: user
});

export const signInWithGoogleStart = () => ({
  type: UserActionsTypes.GOOGLE_SIGN_IN_START
});

export const signInWithEmailStart = emailAndPassword => ({
  type: UserActionsTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});

export const signInFailure = errorMessage => ({
  type: UserActionsTypes.SIGN_IN_FAILURE,
  payload: errorMessage
});

export const signInSuccess = user => ({
  type: UserActionsTypes.SIGN_IN_SUCCESS,
  payload: user
});

export const signUpStart = userCredentials => ({
  type: UserActionsTypes.SIGN_UP_START,
  payload: userCredentials
});

export const signUpFailure = error => ({
  type: UserActionsTypes.SIGN_UP_FAILURE,
  payload: error
});

export const signOutStart = () => ({
  type: UserActionsTypes.SIGN_OUT_START
});
export const signOutSuccess = () => ({
  type: UserActionsTypes.SIGN_OUT_SUCCESS
});
export const signOutFailure = () => ({
  type: UserActionsTypes.SIGN_OUT_FAILURE
});

export const checkUserSession = () => ({
  type: UserActionsTypes.CHECK_USER_SESSION
});
