// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfxbjAFvWwtes9nGERaMv7EKaI_8kealg",
  authDomain: "dragon-news-31d1c.firebaseapp.com",
  projectId: "dragon-news-31d1c",
  storageBucket: "dragon-news-31d1c.firebasestorage.app",
  messagingSenderId: "547788325237",
  appId: "1:547788325237:web:26afae34d9981a6f4e533c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);