import {
  USER_AUTH_SUCCESS,
  USER_LOGOUT_SUCCESS,
  NOTES_FETCH_SUCCESS,
  CHANGE_EMAIL_SUCCESS,
  SHOW_USER_REAUTHENTICATE_FORM,
  HIDE_USER_REAUTHENTICATE_FORM,
} from "store/actions"

const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_AUTH_SUCCESS:
      return {
        ...state,
        user: {
          uid: action.user.uid,
          email: action.user.email,
        },
      }
    case USER_LOGOUT_SUCCESS:
      return {}
    case SHOW_USER_REAUTHENTICATE_FORM:
      return {
        ...state,
        reauthenticatingUserInProgress: true,
      }
    case HIDE_USER_REAUTHENTICATE_FORM:
      return {
        ...state,
        reauthenticatingUserInProgress: undefined,
      }
    case NOTES_FETCH_SUCCESS:
      return {
        ...state,
        notes: action.notes,
      }
    case CHANGE_EMAIL_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          email: action.newEmail,
        },
      }
    default:
      return state
  }
}

export default rootReducer
