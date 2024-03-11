// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVxM3EdSHa9QUk1Wsk9nXlLRIuVyb7qgc",
  authDomain: "animetag-7ce42.firebaseapp.com",
  databaseURL: "https://animetag-7ce42-default-rtdb.firebaseio.com",
  projectId: "animetag-7ce42",
  storageBucket: "animetag-7ce42.appspot.com",
  messagingSenderId: "9471621314",
  appId: "1:9471621314:web:825b41fdad239c3d8da35b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export default app;