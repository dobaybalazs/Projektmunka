// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = initializeApp({
  apiKey: "AIzaSyA-_wg8JU4TqQec-zj1KH_KyfMiR8MRONs",
  authDomain: "projektmunka-78056.firebaseapp.com",
  projectId: "projektmunka-78056",
  storageBucket: "projektmunka-78056.appspot.com",
  messagingSenderId: "443032722741",
  appId: "1:443032722741:web:71265009c204146c4e407c"
});

// Initialize Firebase
export const auth = getAuth(firebaseConfig);

// onAuthStateChanged(auth, user => {
//   if(user !== null){
//     console.log('logged in');
//   } else {
//     console.log('no user');
//   }
// });