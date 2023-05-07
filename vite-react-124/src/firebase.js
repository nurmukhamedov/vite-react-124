import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyCyb6jd11vF-8ZbOEvVrft40x627o99whI",
    authDomain: "auth-124.firebaseapp.com",
    projectId: "auth-124",
    storageBucket: "auth-124.appspot.com",
    messagingSenderId: "304888837937",
    appId: "1:304888837937:web:333848511877dcbcdae210"
});

const auth = app.auth();
export { auth };
export default app;