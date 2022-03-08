import { initializeApp, cert } from "firebase-admin/app";
import { getApps } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import { getStorage } from "firebase-admin/storage";

const firebaseAdminConfig = {
  credential: cert({
    projectId: process.env.PROJECT_ID,
    privateKey: process.env.PRIVATE_KEY,
    clientEmail: process.env.CLIENT_EMAIL,
  }),
  storageBucket: `${process.env.PROJECT_ID}.appspot.com`,
};

if (!getApps().length) {
  initializeApp(firebaseAdminConfig);
}
const auth = getAuth();
const db = getFirestore();
const storage = getStorage();

export { auth, db, storage };
