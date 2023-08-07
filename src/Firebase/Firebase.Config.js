// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2q4QUXinTq76a9HVTmE5AuAkns1_4_YU",
  authDomain: "genius-car-ed136.firebaseapp.com",
  projectId: "genius-car-ed136",
  storageBucket: "genius-car-ed136.appspot.com",
  messagingSenderId: "803585090416",
  appId: "1:803585090416:web:b9a29af8c6b6d198a8e5b5",
  measurementId: "G-NERQ39W2RT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;