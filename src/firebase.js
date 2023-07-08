import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "badie-alliance-contact-form.firebaseapp.com",
  projectId: "badie-alliance-contact-form",
  storageBucket: "badie-alliance-contact-form.appspot.com",
  messagingSenderId: "361128909952",
  appId: "1:361128909952:web:edea15508b7c54bae91a65",
  measurementId: "G-3K2GSS9L23"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
