import {initializeApp} from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCKSBjlhp056noC0qb5UbE-yyM96pdtlq4",
  authDomain: "eyego-dashboard-8d39b.firebaseapp.com",
  projectId: "eyego-dashboard-8d39b",
  storageBucket: "eyego-dashboard-8d39b.firebasestorage.app",
  messagingSenderId: "713639358700",
  appId: "1:713639358700:web:a222a64b7226e55f1135c9"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);