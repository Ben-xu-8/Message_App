// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA6_o8-e-Ng7w9Mo5hqDJFWrMLqd-pHIuQ',
  authDomain: 'connect-chat-68d79.firebaseapp.com',
  projectId: 'connect-chat-68d79',
  storageBucket: 'connect-chat-68d79.appspot.com',
  messagingSenderId: '952061365771',
  appId: '1:952061365771:web:ccb0546b6aa2c317cc810e',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
