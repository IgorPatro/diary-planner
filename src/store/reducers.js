import { USER_AUTH_SUCCESS, USER_LOGOUT_SUCCESS } from "store/actions"

const initialState = {
  cos: "Kowal_heehe xd",
}

const rootReducer = (state = initialState, action) => {
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
