// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsscdF5z8JWd8Z6CiNi0kycx-dDSfhy0M",
  authDomain: "manish-linkedin-clone.firebaseapp.com",
  projectId: "manish-linkedin-clone",
  storageBucket: "manish-linkedin-clone.appspot.com",
  messagingSenderId: "16880124388",
  appId: "1:16880124388:web:60c7c6bd7ba8b77d2c07f1"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
// const storage = getStorage(firebaseApp);

export { db, auth };