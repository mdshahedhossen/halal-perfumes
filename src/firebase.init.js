// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzMd1W45xYnps8uKz4KAAK3ToBN_Zn7z4",
  authDomain: "halal-perfumes.firebaseapp.com",
  projectId: "halal-perfumes",
  storageBucket: "halal-perfumes.appspot.com",
  messagingSenderId: "332344083092",
  appId: "1:332344083092:web:9be3d98ca49235e908ea81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;
