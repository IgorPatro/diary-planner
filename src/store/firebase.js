import firebase from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyArZpO-UxeI3KatCP-SXwEEsORVN0du-DA",
  authDomain: "diary-planner-b254f.firebaseapp.com",
  projectId: "diary-planner-b254f",
  storageBucket: "diary-planner-b254f.appspot.com",
  messagingSenderId: "46472753819",
  appId: "1:46472753819:web:c8aab4aabd729c30e30c3e",
}

// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID,
// }

const Firebase = firebase.initializeApp(firebaseConfig)

export default Firebase
