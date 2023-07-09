import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const firebaseConfig = {
    apiKey: config.public.FIREBASE_API_KEY,
    authDomain: "cinema-fb610.firebaseapp.com",
    projectId: "cinema-fb610",
    storageBucket: "cinema-fb610.appspot.com",
    messagingSenderId: "34172379794",
    appId: "1:34172379794:web:fefc341250656186a33c4b",
    measurementId: "G-B7Y95KSBE0",
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  console.log(app);
});