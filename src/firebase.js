import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJxNM5v5X00Ct_mdPg51uBbFOIylTXwRI",
  authDomain: "udemy-blog-react.firebaseapp.com",
  projectId: "udemy-blog-react",
  storageBucket: "udemy-blog-react.appspot.com",
  messagingSenderId: "934805209310",
  appId: "1:934805209310:web:6534c6873e9862edc2c24f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db}; 