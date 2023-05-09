// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDK-8IoDZ31wL7cUWOrluNVL7iOhtQ1XBs',
  authDomain: 'hopecentrevms.firebaseapp.com',
  projectId: 'hopecentrevms',
  storageBucket: 'hopecentrevms.appspot.com',
  messagingSenderId: '925841915870',
  appId: '1:925841915870:web:a803aaddf6fb123fc0a74f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
