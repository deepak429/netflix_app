// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyB-OiLZYxD20DrcliGQQvBk7PsRfYUHVKM",
    authDomain: "netflix-clone-cdfe2.firebaseapp.com",
    projectId: "netflix-clone-cdfe2",
    storageBucket: "netflix-clone-cdfe2.appspot.com",
    messagingSenderId: "809218203106",
    appId: "1:809218203106:web:d48d4b396f161116042dbb",
    measurementId: "G-EHXCMCV5B1"
  };

  const  firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;