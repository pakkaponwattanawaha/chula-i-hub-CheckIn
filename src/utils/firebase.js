import firebase , { initializeApp } from 'firebase'
var firebaseConfig = {
  apiKey: "AIzaSyB4evnBQrK3Y5vkb2UHYCw34uVGA3SrVjk",
  authDomain: "cuihubcheckin.firebaseapp.com",
  databaseURL: "https://cuihubcheckin-default-rtdb.firebaseio.com",
  projectId: "cuihubcheckin",
  storageBucket: "cuihubcheckin.appspot.com",
  messagingSenderId: "130853418602",
  appId: "1:130853418602:web:cc6b096043da069175bc13",
  measurementId: "G-96SGMQB76Q"
};


firebase.initializeApp(firebaseConfig);

export default firebase;