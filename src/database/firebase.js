import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDwLihcTUNZGGBCA_QuNK0VZvNvp5WphMs",
  authDomain: "twitter-clone-fd934.firebaseapp.com",
  projectId: "twitter-clone-fd934",
  storageBucket: "twitter-clone-fd934.appspot.com",
  messagingSenderId: "491815144307",
  appId: "1:491815144307:web:de30efeb6db4d2698b1306",
  measurementId: "G-HLYNB58XZ1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;