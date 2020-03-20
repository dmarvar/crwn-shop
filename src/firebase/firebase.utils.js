import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBVaUPRUWMcXXaxthZp-hcpOEiVLNYhuxo",
  authDomain: "crwn-db-9b12c.firebaseapp.com",
  databaseURL: "https://crwn-db-9b12c.firebaseio.com",
  projectId: "crwn-db-9b12c",
  storageBucket: "crwn-db-9b12c.appspot.com",
  messagingSenderId: "960504414541",
  appId: "1:960504414541:web:2233ffd5a50d1e14917704",
  measurementId: "G-CCKTGTBSXG"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exist) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;