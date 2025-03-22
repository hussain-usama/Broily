
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc,getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCv7jUv35_JzZRG8RwCwgnR3upKtfSE-dE",
  authDomain: "broily.firebaseapp.com",
  projectId: "broily",
  //storageBucket: "broily.appspot.com",
 storageBucket: "broily.firebasestorage.app",
  messagingSenderId: "811907122613",
  appId: "1:811907122613:web:96ea582e16ef68c3ab85fc",
  measurementId: "G-486V0EZF84"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db, collection, addDoc, getDocs };