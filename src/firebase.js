import firebase from 'firebase/compat'

const firebaseConfig = {
    apiKey: "AIzaSyDJ3UaMUt3yIIcguWbdrPNz7kP2p4spW64",
    authDomain: "disneyplus-clone-7a6df.firebaseapp.com",
    projectId: "disneyplus-clone-7a6df",
    storageBucket: "disneyplus-clone-7a6df.appspot.com",
    messagingSenderId: "406521088611",
    appId: "1:406521088611:web:97392678e44436c7b58656",
    measurementId: "G-T92PMTRMGV"
  };
  
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth= firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  

  export {auth, provider, storage};
  export default db;