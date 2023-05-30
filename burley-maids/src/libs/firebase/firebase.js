// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBQaH6VvnY_BXmGU-b55FmJCOlkmdw7-V4",

  authDomain: "burley-maids.firebaseapp.com",

  projectId: "burley-maids",

  storageBucket: "burley-maids.appspot.com",

  messagingSenderId: "946123700109",

  appId: "1:946123700109:web:e988652997257b07b56fc4",

  measurementId: "G-J3F1PQD702"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);