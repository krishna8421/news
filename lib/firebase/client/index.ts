import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "@firebase/storage";
// import { getAnalytics } from "@firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
}
const auth = getAuth();
const db = getFirestore(app);
const storage = getStorage();
// const analytics = getAnalytics();

export { auth, db, storage };
