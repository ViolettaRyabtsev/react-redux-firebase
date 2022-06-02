import { initializeApp } from "firebase/app"
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth"

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyDAREc47K0Czyt2ywFU7LrvM-hU0MlQRcc",
    authDomain: "crown-clothing-db-51686.firebaseapp.com",
    projectId: "crown-clothing-db-51686",
    storageBucket: "crown-clothing-db-51686.appspot.com",
    messagingSenderId: "785369897436",
    appId: "1:785369897436:web:f66cf9d04d9b52874d1719"
  };
  
  // Initialize Firebase
  
  const firebaseApp = initializeApp(firebaseConfig);

  const provider= new GoogleAuthProvider();

  provider.setCustomParameters({
      prompt: "select_account"
  });

  export const auth=getAuth();

  export const signInWithGooglePopup= () => signInWithPopup( auth, provider)