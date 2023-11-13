
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCiT4NvN-eYTSh0Vqgz-TEpBHZhtwKjd9c",
  authDomain: "minorproject-46303.firebaseapp.com",
  projectId: "minorproject-46303",
  storageBucket: "minorproject-46303.appspot.com",
  messagingSenderId: "135228002313",
  appId: "1:135228002313:web:5089eef3bd7f0d7bb168d8"
};


const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;