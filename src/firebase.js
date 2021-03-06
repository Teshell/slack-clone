import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-v9aZofO0hEwm63swoh4qz-B1P7y8apg",
  authDomain: "slack-clone-b0b0b.firebaseapp.com",
  projectId: "slack-clone-b0b0b",
  storageBucket: "slack-clone-b0b0b.appspot.com",
  messagingSenderId: "311581345064",
  appId: "1:311581345064:web:ed0d976aa8b63f08a6fc1d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
