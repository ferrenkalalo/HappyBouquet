// import {initializeApp} from 'firebase/app';
// import {getFirestore, collection, getDocs} from 'firebase/firestore/lite';
// // Follow this pattern to import other Firebase services
// // import { } from 'firebase/<service>';

// // TODO: Replace the following with your app's Firebase project configuration
// const firebaseConfig = {
//   //...
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// // Get a list of cities from your database
// async function getCities(db) {
//   const citiesCol = collection(db, 'cities');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   return cityList;
// }

// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDRo0HRVTqtRjSSwyrt5FPwfCTMrrwsHeU',
  authDomain: 'happybouquet-mopro.firebaseapp.com',
  databaseURL: 'https://happybouquet-mopro-default-rtdb.firebaseio.com',
  projectId: 'happybouquet-mopro',
  storageBucket: 'happybouquet-mopro.appspot.com',
  messagingSenderId: '342495407254',
  appId: '1:342495407254:web:6cf70ab16bab0d2530e6b7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);

// export function signup(email, password, username) {
//   return createUserWithEmailAndPassword(auth, username, email, password);
// }
