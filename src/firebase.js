import firebase from 'firebase/app';
import 'firebase/auth';

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyBEj4HjFmzaEwLYlPZo_3rz4IaeAAsEe2M",
  authDomain: "meandyou-dd357.firebaseapp.com",
  projectId: "meandyou-dd357",
  storageBucket: "meandyou-dd357.appspot.com",
  messagingSenderId: "15123860546",
  appId: "1:15123860546:web:9795c909f5337fbad0f1db"
}).auth();