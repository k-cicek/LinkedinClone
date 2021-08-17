import firebase from "firebase";

const firebaseConfig = {
 apiKey: "AIzaSyDzeImCPZfz6dEErEbKzzkKEMVRRflcfBE",
 authDomain: "linkedinclone-3ee11.firebaseapp.com",
 projectId: "linkedinclone-3ee11",
 storageBucket: "linkedinclone-3ee11.appspot.com",
 messagingSenderId: "231650689785",
 appId: "1:231650689785:web:a22ea28ff3154da6671828"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
