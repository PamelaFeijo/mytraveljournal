import firebase from "firebase/app";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyBS6mUP_21r02RZuyRcpGVBRPfWe_YqfSY",
    authDomain: "mytraveljournal-10917.firebaseapp.com",
    projectId: "mytraveljournal-10917",
    storageBucket: "mytraveljournal-10917.appspot.com",
    messagingSenderId: "267519333961",
    appId: "1:267519333961:web:22fc74d2f1c8cb62125198",
    measurementId: "G-DYH3KSLKTG"
  }).auth();