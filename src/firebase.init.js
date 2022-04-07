// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAZ_XWeBuZxzV9fYkENOyuFUE70hAbNbCU",
    authDomain: "email-password-auth-fc7bd.firebaseapp.com",
    projectId: "email-password-auth-fc7bd",
    storageBucket: "email-password-auth-fc7bd.appspot.com",
    messagingSenderId: "670283817659",
    appId: "1:670283817659:web:4a61ab330c97dcd306bf9e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;