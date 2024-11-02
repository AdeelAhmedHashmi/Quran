import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDo3COtj1cxEbLf-22KeUsZB8BcNZKR1-U",
  authDomain: "fir-4741f.firebaseapp.com",
  databaseURL: "https://fir-4741f-default-rtdb.firebaseio.com",
  projectId: "fir-4741f",
  storageBucket: "fir-4741f.firebasestorage.app",
  messagingSenderId: "877265709414",
  appId: "1:877265709414:web:b47d2be5e84d15920c00a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
