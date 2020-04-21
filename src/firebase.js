import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDaKVab1IY4jky6LvUnloWzQXBj7iTVjeU",
    authDomain: "todolist-ee33c.firebaseapp.com",
    databaseURL: "https://todolist-ee33c.firebaseio.com",
    projectId: "todolist-ee33c",
    storageBucket: "todolist-ee33c.appspot.com",
    messagingSenderId: "620969956100",
    appId: "1:620969956100:web:ee37537c99e00691357651",
    measurementId: "G-TE76G0B70C"
})

export {firebaseConfig as firebase};

