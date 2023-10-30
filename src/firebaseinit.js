// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0Eb0lGtXR0mhqollg7awE0d__Q_sbazQ",
  authDomain: "busybuynav.firebaseapp.com",
  projectId: "busybuynav",
  storageBucket: "busybuynav.appspot.com",
  messagingSenderId: "135999355095",
  appId: "1:135999355095:web:b0654cb1163cb602f35892"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export {app};