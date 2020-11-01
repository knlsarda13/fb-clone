import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAEr_8L1z95vdjl1F06kIpVUrVdGpvoe60",
  authDomain: "facebook-clone-841e4.firebaseapp.com",
  databaseURL: "https://facebook-clone-841e4.firebaseio.com",
  projectId: "facebook-clone-841e4",
  storageBucket: "facebook-clone-841e4.appspot.com",
  messagingSenderId: "634648386008",
  appId: "1:634648386008:web:e20855ae96c65425a53aad",
  measurementId: "G-69P16QH607"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const db = firebase.firestore()

export { auth, provider }
export default db