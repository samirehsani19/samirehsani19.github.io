 // Import the functions you need from the SDKs you need
 import { initializeApp } from "firebase/app";
 import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDs1s-BiZdLym9njzZhfdW638cwZ1UmOy8",
    authDomain: "todoapp-1256c.firebaseapp.com",
    projectId: "todoapp-1256c",
    storageBucket: "todoapp-1256c.appspot.com",
    messagingSenderId: "87902719224",
    appId: "1:87902719224:web:5753a1705ca63f904d7f0d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


