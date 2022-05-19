import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDlPN2wv6TsEeSGP3HE1NvUwxQ1njRsdu8",
  authDomain: "thegamestore-69730.firebaseapp.com",
  projectId: "thegamestore-69730",
  storageBucket: "thegamestore-69730.appspot.com",
  messagingSenderId: "227052033881",
  appId: "1:227052033881:web:722822f35acd90bc75de48",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
