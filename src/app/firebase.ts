import firebase from "firebase/app";
import "firebase/database"; // If using Firebase database

const firebaseConfig = {
  apiKey: "AIzaSyDxFJ29RaoGA4yo4HGO2p0u34Jg4Gx_3OY",
  authDomain: "stocker-website-emails.firebaseapp.com",
  databaseURL: "https://stocker-website-emails-default-rtdb.firebaseio.com",
  projectId: "stocker-website-emails",
  storageBucket: "stocker-website-emails.appspot.com",
  messagingSenderId: "124400140284",
  appId: "1:124400140284:web:e177b499ab1ff1757f3c79",
  measurementId: "G-6DRCKYFRQS",
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();

export default database;