import { USER_AUTH_SUCCESS, USER_LOGOUT_SUCCESS, NOTES_FETCH_SUCCESS } from "store/actions"

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
    case NOTES_FETCH_SUCCESS:
      return {
        ...state,
        notes: action.notes,
      }
    default:
      return state
  }
}

export default rootReducer
