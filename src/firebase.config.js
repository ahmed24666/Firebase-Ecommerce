import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyAA_Bl3mnpStrtAR8CMxNBFmpuJ5HCVaqA",
  authDomain: "maltimart-aoe.firebaseapp.com",
  projectId: "maltimart-aoe",
  storageBucket: "maltimart-aoe.appspot.com",
  messagingSenderId: "178105904135",
  appId: "1:178105904135:web:a63a08085b1c29237b4ea2"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db=getFirestore(app)
export const storage =getStorage(app)
export default app