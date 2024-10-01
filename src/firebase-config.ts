// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

// You can now use the auth object to authenticate users
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    console.log("User is signed in");
  } else {
    // User is signed out
    console.log("User is signed out");
  }
});

// Initialize Firebase Google Authentication

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});




// Export Area

export { auth }
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore(app)