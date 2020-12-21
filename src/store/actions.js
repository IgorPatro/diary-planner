import Firebase from "store/firebase"
import "firebase/auth"

// ----- USERS ----- //
export const USER_AUTH_REQUEST = "USER_AUTH_REQUEST"
export const USER_AUTH_SUCCESS = "USER_AUTH_SUCCESS"
export const USER_AUTH_FAILURE = "USER_AUTH_FAILURE"
export const USER_CREATION_REQUEST = "USER_CREATION_REQUEST"
export const USER_CREATION_SUCCESS = "USER_CREATION_SUCCESS"
export const USER_CREATION_FAILURE = "USER_CREATION_FAILURE"
export const USER_LOGOUT_REQUEST = "USER_LOGOUT_REQUEST"
export const USER_LOGOUT_SUCCESS = "USER_LOGOUT_SUCCESS"
export const USER_LOGOUT_FAILURE = "USER_LOGOUT_FAILURE"

export const createNewUser = (email, password) => (dispatch) => {
  dispatch({ type: USER_CREATION_REQUEST })

  Firebase.auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      dispatch({ type: USER_CREATION_SUCCESS })
    })
    .catch((error) => {
      dispatch({ type: USER_CREATION_FAILURE })
    })
}

export const logInUser = (email, password) => (dispatch) => {
  dispatch({ type: USER_AUTH_REQUEST })

  Firebase.auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      // dispatch({ type: USER_AUTH_SUCCESS })
    })
    .catch((error) => {
      dispatch({ type: USER_AUTH_FAILURE })
    })
}

export const logOutUser = () => (dispatch) => {
  dispatch({ type: USER_LOGOUT_REQUEST })

  Firebase.auth()
    .signOut()
    .then(() => {
      // dispatch({ type: USER_LOGOUT_SUCCESS })
    })
    .catch((error) => {
      dispatch({ type: USER_LOGOUT_FAILURE })
    })
}
