import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyD8UKIpeKA2u0kkJ6FqjVlF0uAH1TDLQhI",
    authDomain: "foodtrove-c7068.firebaseapp.com",
    databaseURL: "https://foodtrove-c7068-default-rtdb.firebaseio.com",
    projectId: "foodtrove-c7068",
    storageBucket: "foodtrove-c7068.firebasestorage.app",
    messagingSenderId: "591827392558",
    appId: "1:591827392558:web:fb47b380e7543f800da7bf",
    measurementId: "G-TZ3M6FBL43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };