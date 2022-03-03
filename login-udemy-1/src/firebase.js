import app from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyClZFJKvHJ2-DYqUxDqHrTNol4BRusVs2U",
    authDomain: "crud-udemy-react-2d157.firebaseapp.com",
    projectId: "crud-udemy-react-2d157",
    storageBucket: "crud-udemy-react-2d157.appspot.com",
    messagingSenderId: "57219499440",
    appId: "1:57219499440:web:f332a212d78249eba48275"
  };
  
// Initialize Firebase
app.initializeApp(firebaseConfig);

//Usamos Firestore y la Autenticación del usuario
const db = app.firestore()
const auth = app.auth()

//Exportamos las funciones
export {db, auth}