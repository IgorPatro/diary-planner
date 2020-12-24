import Firebase from "store/firebase"
import "firebase/auth"
import "firebase/firestore"

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

// ----- NOTES ----- //

export const NOTES_FETCH_REQUEST = "NOTES_FETCH_REQUEST"
export const NOTES_FETCH_SUCCESS = "NOTES_FETCH_SUCCESS"
export const NOTES_FETCH_FAILURE = "NOTES_FETCH_FAILURE"

export const fetchAllUserNotes = (userId) => (dispatch) => {
  dispatch({ type: NOTES_FETCH_REQUEST })

  Firebase.firestore()
    .collection(userId)
    .get()
    .then((payload) => {
      const notes = []

      payload.forEach((doc) => {
        notes.push({ id: doc.id, content: doc.data().content, date: doc.data().date.seconds })
      })

      dispatch({ type: NOTES_FETCH_SUCCESS, notes })
    })
    .catch((error) => dispatch({ type: NOTES_FETCH_FAILURE }))
}

// ----- USER DATA ----- //

export const CHANGE_EMAIL_REQUEST = "CHANGE_EMAIL_REQUEST"
export const CHANGE_EMAIL_SUCCESS = "CHANGE_EMAIL_SUCCESS"
export const CHANGE_EMAIL_FAILURE = "CHANGE_EMAIL_FAILURE"

export const changeUserEmail = (newEmail) => (dispatch) => {
  dispatch({ type: CHANGE_EMAIL_REQUEST })

  const { currentUser } = Firebase.auth()

  currentUser
    .updateEmail(newEmail)
    .then(() => {
      dispatch({ type: CHANGE_EMAIL_SUCCESS, newEmail })
    })
    .catch((error) => {
      dispatch({ type: CHANGE_EMAIL_FAILURE })
    })
}
