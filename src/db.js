import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

// Your web app's Firebase configuration
let firebaseConfig = {
  apiKey: "AIzaSyCH85TWgdtKBsWM6Oke39zTY8ze4LMvIno",
  authDomain: "pet-reminder-72a4f.firebaseapp.com",
  projectId: "pet-reminder-72a4f",
  storageBucket: "pet-reminder-72a4f.appspot.com",
  messagingSenderId: "124998604572",
  appId: "1:124998604572:web:8f994dcccfa49564f4ccd9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const storage = firebase.storage();