import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import 'firebase/firestore'; // Import Firestore if you need it
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCm_Vd6soHNEcAKOVDpdlimKvRHAWUfKXk",
    authDomain: "react-redux-plane.firebaseapp.com",
    projectId: "react-redux-plane",
    storageBucket: "react-redux-plane.appspot.com",
    messagingSenderId: "889250897350",
    appId: "1:889250897350:web:1070aaf228961b6987e6c7",
    measurementId: "G-18S0CV3JYM"
};

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default auth 