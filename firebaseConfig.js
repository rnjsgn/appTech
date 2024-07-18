import firebase from "firebase/compat/app";

// 사용할 파이어베이스 서비스 주석을 해제합니다
import "firebase/compat/auth";
import "firebase/compat/database";
//import "firebase/compat/firestore";
//import "firebase/compat/functions";
// import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAB1LaLfbEQkVbAjgxeII5sBCX_-Rnvf-k",
    authDomain: "app-tech-37f98.firebaseapp.com",
    projectId: "app-tech-37f98",
    storageBucket: "app-tech-37f98.appspot.com",
    messagingSenderId: "594633630736",
    appId: "1:594633630736:web:6b2ed4958f4452326c9695",
    measurementId: "G-GVCMKNJ3HG",
    databaseURL: "https://app-tech-37f98-default-rtdb.firebaseio.com"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const firebase_db = firebase.database();
export const firebase_auth = firebase.auth();
export default firebase;