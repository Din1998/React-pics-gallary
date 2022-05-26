import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOZD3WnwQC1dgPogWXCv-MJ-4lgeid8kw",
  authDomain: "firegram-e0dd6.firebaseapp.com",
  projectId: "firegram-e0dd6",
  storageBucket: "firegram-e0dd6.appspot.com",
  messagingSenderId: "1072533779947",
  appId: "1:1072533779947:web:a3734a2da31c908020d5ae"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage,projectFirestore,timestamp};