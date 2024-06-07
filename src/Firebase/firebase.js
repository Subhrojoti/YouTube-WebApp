import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAMOhD4c38Ivj7AfHDLumvTDy0wpYvs6n4",
  authDomain: "almax-8dc6f.firebaseapp.com",
  projectId: "almax-8dc6f",
  storageBucket: "almax-8dc6f.appspot.com",
  messagingSenderId: "783393661547",
  appId: "1:783393661547:web:2ae49f6e4c86b110de472e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
