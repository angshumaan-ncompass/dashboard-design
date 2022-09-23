import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDrMNgnY-z891rgvWJsPNQRuExqQsc6U-k",
  authDomain: "react-dashsboard.firebaseapp.com",
  projectId: "react-dashsboard",
  storageBucket: "react-dashsboard.appspot.com",
  messagingSenderId: "947264027233",
  appId: "1:947264027233:web:bd262d92c932e0eae60820",
  measurementId: "G-RFPT5RQH38",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
