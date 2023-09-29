import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCC7aV39raNtY1_gDZkg0IF1AmB8K9IHIc",
    authDomain: "twitter-clone-udemy-d68fd.firebaseapp.com",
    projectId: "twitter-clone-udemy-d68fd",
    storageBucket: "twitter-clone-udemy-d68fd.appspot.com",
    messagingSenderId: "637728044257",
    appId: "1:637728044257:web:22496d43d778fa58f033a0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;