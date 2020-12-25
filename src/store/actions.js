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
    .catch((error) => {
      dispatch({ type: USER_AUTH_FAILURE })
    })
}

export const logOutUser = () => (dispatch) => {
  dispatch({ type: USER_LOGOUT_REQUEST })

  Firebase.auth()
    .signOut()
    .catch((error) => {
      dispatch({ type: USER_LOGOUT_FAILURE })
    })
}

// ----- NOTES ----- //

export const NOTES_FETCH_REQUEST = "NOTES_FETCH_REQUEST"
export const NOTES_FETCH_SUCCESS = "NOTES_FETCH_SUCCESS"
export const NOTES_FETCH_FAILURE = "NOTES_FETCH_FAILURE"
export const ADD_NOTE_REQUEST = "ADD_NOTE_REQUEST"
export const ADD_NOTE_SUCCESS = "ADD_NOTE_SUCCESS"
export const ADD_NOTE_FAILURE = "ADD_NOTE_FAILURE"
export const DELETE_NOTE_REQUEST = "DELETE_NOTE_REQUEST"
export const DELETE_NOTE_SUCCESS = "DELETE_NOTE_SUCCESS"
export const DELETE_NOTE_FAILURE = "DELETE_NOTE_FAILURE"

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

export const addNote = (userId, note) => (dispatch) => {
  dispatch({ type: ADD_NOTE_REQUEST })

  const date = new Date()

  Firebase.firestore()
    .collection(userId)
    .doc(Math.random().toString(36).substr(2, 9))
    .set({
      content: note,
      date,
    })
    .then(() => {
      dispatch({ type: ADD_NOTE_SUCCESS })
      dispatch(fetchAllUserNotes(userId))
    })
    .catch((error) => {
      dispatch({ type: ADD_NOTE_FAILURE })
    })
}

export const deleteNote = (userId, noteId) => (dispatch) => {
  dispatch({ type: DELETE_NOTE_REQUEST })

  Firebase.firestore()
    .collection(userId)
    .doc(noteId)
    .delete()
    .then(() => {
      dispatch({ type: DELETE_NOTE_SUCCESS, noteId })
    })
    .catch((error) => {
      dispatch({ type: DELETE_NOTE_FAILURE })
    })
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
