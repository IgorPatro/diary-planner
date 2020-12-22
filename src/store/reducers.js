import { USER_AUTH_SUCCESS, USER_LOGOUT_SUCCESS } from "store/actions"

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
      return {
        ...state,
        user: undefined,
      }
    default:
      return state
  }
}

export default rootReducer
