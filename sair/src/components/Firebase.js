import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCu_tcoNUfT2R5_1rjbz1Ogeb_Z8C4MH3Q",
    authDomain: "wrinkal-e24d0.firebaseapp.com",
    projectId: "wrinkal-e24d0",
    storageBucket: "wrinkal-e24d0.appspot.com",
    messagingSenderId: "815497721490",
    appId: "1:815497721490:web:cd617ca64b363c2368d84b",
    measurementId: "G-EW6CF183P4"
  };
  
// Initialize Firebase
const Mobileotp = initializeApp(firebaseConfig);

export const auth = getAuth(Mobileotp);