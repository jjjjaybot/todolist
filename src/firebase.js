import firebase from 'firebase/app';
import 'firebase/firestore';
import {config} from './config'; 

const firebaseConfig = firebase.initializeApp({
    config
})

export {firebaseConfig as firebase};

