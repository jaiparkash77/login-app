import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBesjacrZeFSbKb6Ylh8AdUNs8vTQec3ow",
  authDomain: "login-9303a.firebaseapp.com",
  projectId: "login-9303a",
  storageBucket: "login-9303a.appspot.com",
  messagingSenderId: "482851963807",
  appId: "1:482851963807:web:fb0912119438e768d333aa"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
