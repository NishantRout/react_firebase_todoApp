import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAv1IV8lO0DPErCplOWAqonTp60GgH07Rg",
    authDomain: "react-todo-app-ce76b.firebaseapp.com",
    databaseURL: "https://react-todo-app-ce76b.firebaseio.com",
    projectId: "react-todo-app-ce76b",
    storageBucket: "react-todo-app-ce76b.appspot.com",
    messagingSenderId: "549968160786",
    appId: "1:549968160786:web:d1f9595fd7bb541a7b50cb",
    measurementId: "G-PZWN72CGPC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;