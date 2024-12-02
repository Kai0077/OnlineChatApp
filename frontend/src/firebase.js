
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 


const firebaseConfig = {
  apiKey: "AIzaSyCyvS7ROcBBIU30WbLS5ppAFhwdEzwhCsY",
  authDomain: "c-chatapp-a48d0.firebaseapp.com",
  projectId: "c-chatapp-a48d0",
  storageBucket: "c-chatapp-a48d0.firebasestorage.app",
  messagingSenderId: "95165222686",
  appId: "1:95165222686:web:7b4f3ea00473efb617830f",
  measurementId: "G-TMEGEB5DEE"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db }; 
