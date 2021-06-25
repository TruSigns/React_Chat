import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAi782vQcxIAMvKxl_udQeLlQoEdILzAQU",
  authDomain: "nightmare-78ce7.firebaseapp.com",
  projectId: "nightmare-78ce7",
  storageBucket: "nightmare-78ce7.appspot.com",
  messagingSenderId: "175933217857",
  appId: "1:175933217857:web:e05a6065e809dd6e79fac0",
  measurementId: "G-55ZN3V74H8",
});

const db = firebase.firestore();

const auth = firebase.auth();

export { db, auth };
