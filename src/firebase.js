import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDj263cEolCCEr-zGoKqa8JhvG57nRSnTE",
  authDomain: "react-tinder-app-30619.firebaseapp.com",
  databaseURL: "https://react-tinder-app-30619.firebaseio.com",
  projectId: "react-tinder-app-30619",
  storageBucket: "react-tinder-app-30619.appspot.com",
  messagingSenderId: "575579262895",
  appId: "1:575579262895:web:a2448460f862662897a95a",
  measurementId: "G-1N0D1S7JDH",
});

const db = firebaseApp.firestore();

export default db;
