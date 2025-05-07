
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-x-f8j2KAE8I3mdxf2R470InJ4h-qHdQ",
  authDomain: "jotatattoo-69600.firebaseapp.com",
  projectId: "jotatattoo-69600",
  storageBucket: "jotatattoo-69600.firebasestorage.app",
  messagingSenderId: "22550752505",
  appId: "1:22550752505:web:e743c057ca96d371f58628"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)