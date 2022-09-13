// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAz1CJro7XHmGKj6No27E1-M2YpGJDnF5Q",
  authDomain: "doctors-portal-fbbb5.firebaseapp.com",
  projectId: "doctors-portal-fbbb5",
  storageBucket: "doctors-portal-fbbb5.appspot.com",
  messagingSenderId: "775793292708",
  appId: "1:775793292708:web:7baa961c15bdda26ecfd31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;