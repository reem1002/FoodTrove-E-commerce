import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDiP9Tt29ATiDHUZ7-HhQSHYfMVKPtlPzc",
    authDomain: "reemmarket-44896.firebaseapp.com",
    databaseURL: "https://reemmarket-44896-default-rtdb.firebaseio.com",
    projectId: "reemmarket-44896",
    storageBucket: "reemmarket-44896.firebasestorage.app",
    messagingSenderId: "334207175380",
    appId: "1:334207175380:web:fac42eb8a8f8957b3d0941",
    measurementId: "G-G8QSWLB7XX",
};

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID,
//     measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
// };


const app = initializeApp(firebaseConfig);


const analytics = getAnalytics(app);
const database = getDatabase(app);
const firestore = getFirestore(app);
const auth = getAuth(app);

export { app, analytics, database, firestore, auth };
