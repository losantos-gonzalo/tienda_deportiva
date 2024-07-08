// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { productos } from "../data/asyncMock";
import { addDoc, collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//info priivada que guardar en variable de enterno
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAZTl0EmdzwPi744XIgLJsE9UXLEwSzR_U",
    authDomain: "venta-ropa-deportiva.firebaseapp.com",
    projectId: "venta-ropa-deportiva",
    storageBucket: "venta-ropa-deportiva.appspot.com",
    messagingSenderId: "255798698107",
    appId: "1:255798698107:web:6be7cd5fbdb8dd989fc2de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

// ------------ codigo para ir agregando a la base de datos ------------

// productos.forEach((prod) => {
//     addDoc(collection(db, 'productos'), prod)
//         .then((elem) => console.log(`Se agrego el producto id ${elem.id}`))
//         .catch((error) => console.log(error));
// });