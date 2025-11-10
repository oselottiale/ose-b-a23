import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBey9z51rXWU99ZtDaBP5DEEIQ1Nt-VxhA",
  authDomain: "repe-229f0.firebaseapp.com",
  projectId: "repe-229f0",
  appId: "1:492186174522:web:bdae6cd85f8c7a6d74a103"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
