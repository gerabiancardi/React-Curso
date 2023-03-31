import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAt_1dBdAKzjyo5ZPI0Z7c9fqSG2jbu1w8",
  authDomain: "coderhouse-ecommerce-912a3.firebaseapp.com",
  projectId: "coderhouse-ecommerce-912a3",
  storageBucket: "coderhouse-ecommerce-912a3.appspot.com",
  messagingSenderId: "1097303199180",
  appId: "1:1097303199180:web:54baaa0a87ce8d5edee169",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
