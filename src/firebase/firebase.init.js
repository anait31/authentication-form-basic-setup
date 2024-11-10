// Import the functions you need from the SDKs you need
import { initializeApp  } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD29VTT2VBwYU66Yy38HiLavH31cjJfAHc",
  authDomain: "authentication-with-cont-75dc1.firebaseapp.com",
  projectId: "authentication-with-cont-75dc1",
  storageBucket: "authentication-with-cont-75dc1.firebasestorage.app",
  messagingSenderId: "57552255926",
  appId: "1:57552255926:web:deba0c3399a9efe2cddf17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
