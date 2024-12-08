import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import authentication module
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBOErTGtfGQjCL5MYnFj7VPn17YCVe0Eec",
  authDomain: "filmrec-bbcc9.firebaseapp.com",
  projectId: "filmrec-bbcc9",
  storageBucket: "filmrec-bbcc9.appspot.com",
  messagingSenderId: "583164692593",
  appId: "1:583164692593:web:97fa5f12d60e1df682f3d0",
  measurementId: "G-EPPS2ZB35E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize Firebase Authentication

export { app, auth }; // Export both app and auth