import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyBMAuwXeixht_1Gk7UWV9q5u-UkUkeocuY',
    authDomain: 'resistance-f8035.firebaseapp.com',
    projectId: 'resistance-f8035',
    storageBucket: 'resistance-f8035.appspot.com',
    messagingSenderId: '531910174624',
    appId: '1:531910174624:web:0c8e9055fb68221c8be6c5',
    measurementId: 'G-4S0QP2117D',
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
