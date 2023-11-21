import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
  apiKey: "AIzaSyA2XcECmrmKs4di9EaJpDqZHJKp_cVHnFM",
  authDomain: "myportfolio-45d33.firebaseapp.com",
  projectId: "myportfolio-45d33",
  storageBucket: "myportfolio-45d33.appspot.com",
  messagingSenderId: "123342559023",
  appId: "1:123342559023:web:2d11a3a9955388157773da",
};

initializeApp(firebaseConfig);
export const db = getFirestore();
