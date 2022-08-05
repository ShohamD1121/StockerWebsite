import firebase from "firebase/app";
import "firebase/database"; // If using Firebase database

const firebaseConfig = {
  apiKey: process.env.Apy_Key,
  authDomain: process.env.Auth_Domain,
  databaseURL: process.env.Database_URL,
  projectId: process.env.Project_Id,
  storageBucket: process.env.Storage_Bucket,
  messagingSenderId: process.env.Messaging_Sender_Id,
  appId: process.env.App_Id,
  measurementId: process.env.Measurement_Id,
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();

export default database;
