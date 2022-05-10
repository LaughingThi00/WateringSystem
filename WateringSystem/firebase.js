// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/auth";
// import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyBeXUAF007QBGnQIiFOatlk3n6YmIOx3xU",
  // authDomain: "smart-garden-4a2d4.firebaseapp.com",
  // projectId: "smart-garden-4a2d4",
  // storageBucket: "smart-garden-4a2d4.appspot.com",
  // messagingSenderId: "883278624022",
  // appId: "1:883278624022:web:ef5c1ef8dec2e072684c37",
  // measurementId: "G-LK3H523K83",

  apiKey: "AIzaSyAjJmFkubH2qF0J1cB9nZV5cZ3ySxmCZ7k",
  authDomain: "fir-auth-2cd8d.firebaseapp.com",
  projectId: "fir-auth-2cd8d",
  storageBucket: "fir-auth-2cd8d.appspot.com",
  messagingSenderId: "171351031209",
  appId: "1:171351031209:web:4c9d02579a4e9cdd2a18b8",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
