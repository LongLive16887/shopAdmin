import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyDQsKyQyizEMk0snPpg_zPl-VsjIneqngA",
  authDomain: "mirshod-e8a7f.firebaseapp.com",
  projectId: "mirshod-e8a7f",
  storageBucket: "mirshod-e8a7f.firebasestorage.app",
  messagingSenderId: "651399584576",
  appId: "1:651399584576:web:563591416f5c44bd9138a5",
  measurementId: "G-THSZ45WCK2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); 


setPersistence(auth, browserLocalPersistence)
  .then(() => {
    
  })
  .catch((error) => {
    console.error("Error setting persistence:", error);
  });

export { auth, db }; 