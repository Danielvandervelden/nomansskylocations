import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

if (!firebase.apps.length) {

    const config = {
		apiKey: "AIzaSyAN9bbnQNSrEwke_9xycqPx5j-9L-9gCoI",
		authDomain: "nomansskylocations-9e8b5.firebaseapp.com",
		databaseURL: "https://nomansskylocations-9e8b5.firebaseio.com",
		projectId: "nomansskylocations-9e8b5",
		storageBucket: "nomansskylocations-9e8b5.appspot.com",
		messagingSenderId: "277466467159"	
    }

    firebase.initializeApp(config)
    firebase.firestore().settings({})
}

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage}