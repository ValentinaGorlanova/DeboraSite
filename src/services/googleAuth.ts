import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import configApp from "./firebase";

export default async function loginWithGoogleAccount() {
  const provider = new GoogleAuthProvider();
  provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

  const auth = getAuth(configApp);
  try {
    const userCredential = await signInWithPopup(auth, provider);
    console.log(userCredential);
  } catch (err) {
    console.log(err);
  }
}
