import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBNu71OP11aTbEsHofq1TWxWjN5WLdIovA",
    authDomain: "login-senha-react.firebaseapp.com",
    projectId: "login-senha-react",
    storageBucket: "login-senha-react.appspot.com",
    messagingSenderId: "248310341198",
    appId: "1:248310341198:web:992534258a45585f946d1f"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig); 
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
