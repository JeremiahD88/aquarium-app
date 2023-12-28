import { initializeApp, getApps } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBu6IAg5CSD77v6GDON6eFgrn6s4llqayI",
  authDomain: "aquascape-7001c.firebaseapp.com",
  projectId: "aquascape-7001c",
  storageBucket: "aquascape-7001c.appspot.com",
  messagingSenderId: "785151483297",
  appId: "1:785151483297:web:1b8aa301ed0a63f4cebfe0"
};

let app;
if (!getApps().length) {
    app = initializeApp(firebaseConfig);
} else {
    app = getApps()[0]; // if Firebase was already initialized, use that one
}

const db = getDatabase(app);

export { db, ref, onValue };