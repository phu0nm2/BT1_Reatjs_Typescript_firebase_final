import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBsLoyl3i2IdPkZ2zGmcUWxt5KPN0u4L4M",
  authDomain: "api-testing-3f935.firebaseapp.com",
  projectId: "api-testing-3f935",
  storageBucket: "api-testing-3f935.appspot.com",
  messagingSenderId: "300121178576",
  appId: "1:300121178576:web:52e26d2232b2e4a9f579d5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);
export const db = getDatabase(app);
