import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyBpkphbfH9K9lYqHeppIoyY-AFN5tCEdsY",
  authDomain: "react-slack-clone-1c031.firebaseapp.com",
  databaseURL: "https://react-slack-clone-1c031.firebaseio.com",
  projectId: "react-slack-clone-1c031",
  storageBucket: "gs://react-slack-clone-1c031.appspot.com",
  messagingSenderId: "629118157937",
  appId: "1:629118157937:web:7502dd7ec6f5bd59bb47d0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
