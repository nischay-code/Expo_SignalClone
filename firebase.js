/*import * as firebase from 'firebase'
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCrgaCuuTv1gQ9ZVWPeuAkei8Qiwh6jYZU",
  authDomain: "signal-clone-b30f8.firebaseapp.com",
  projectId: "signal-clone-b30f8",
  storageBucket: "signal-clone-b30f8.appspot.com",
  messagingSenderId: "439105284874",
  appId: "1:439105284874:web:762245e932be07df59a8f3",
};
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };*/

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCrgaCuuTv1gQ9ZVWPeuAkei8Qiwh6jYZU",
  authDomain: "signal-clone-b30f8.firebaseapp.com",
  projectId: "signal-clone-b30f8",
  storageBucket: "signal-clone-b30f8.appspot.com",
  messagingSenderId: "439105284874",
  appId: "1:439105284874:web:762245e932be07df59a8f3",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
