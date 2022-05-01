// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app"; //old way of importing
//import firebase from 'firebase';       //new way of importing
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7WfZPeFEHJISh7Iv67fCtP2Bq-W0Jllg",
  authDomain: "instagram-clone-fa10b.firebaseapp.com",
  projectId: "instagram-clone-fa10b",
  storageBucket: "instagram-clone-fa10b.appspot.com",
  messagingSenderId: "163950433346",
  appId: "1:163950433346:web:c8c149dbdc07461b2b89db"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);

//if the app does not exist initialize it AND if it exists use it.
!firebase.apps.length ?
firebase.initializeApp(firebaseConfig) :
firebase.app();

const db = firebase.firestore()
export {firebase,db};