import {
  USER_AUTH_SUCCESS,
  USER_LOGOUT_SUCCESS,
  NOTES_FETCH_SUCCESS,
  CHANGE_EMAIL_SUCCESS,
  DELETE_NOTE_SUCCESS,
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
    case NOTES_FETCH_SUCCESS:
      return {
        ...state,
        notes: action.notes,
      }
    case DELETE_NOTE_SUCCESS:
      return {
        ...state,
        notes: state.notes.filter((note) => {
          return note.id !== action.noteId
        }),
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
