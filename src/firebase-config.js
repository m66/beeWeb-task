import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDMCDtgAnR6XpiV0DSAqBzKhxbrSkuySi0",
  authDomain: "auth-beeweb.firebaseapp.com",
  projectId: "auth-beeweb",
  storageBucket: "auth-beeweb.appspot.com",
  messagingSenderId: "933710051817",
  appId: "1:933710051817:web:0d5cb43980cab6a7f5f378",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth(app);
