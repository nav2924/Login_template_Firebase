import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCFQU8wMhr29vxesXFDylbYagewnafo0lQ",
  authDomain: "dentalhifi-949ea.firebaseapp.com",
  projectId: "dentalhifi-949ea",
  storageBucket: "dentalhifi-949ea.appspot.com",
  messagingSenderId: "571002284664",
  appId: "1:571002284664:web:e8c643b079cd1d70b3db8d",
  measurementId: "G-NXJXDQZ0N4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
