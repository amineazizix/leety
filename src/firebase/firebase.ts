import {getApp, getApps, initializeApp} from "firebase/app";
import {getAuth} from "@firebase/auth/web-extension";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC5Lxa9NWirc0briSIkQ1YU0BGHG7bQdtk",
  authDomain: "leety-2de0c.firebaseapp.com",
  projectId: "leety-2de0c",
  storageBucket: "leety-2de0c.appspot.com",
  messagingSenderId: "1035997580708",
  appId: "1:1035997580708:web:b2c0205026a2bcf9344531",
  measurementId: "G-XV8NRZL5KC"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const firestore = getFirestore(app);

export {app, auth, firestore}