import { GoogleAuthProvider, getAuth, signInWithPopup, Auth } from "firebase/auth";
import { initializeApp } from "firebase/app";

import { firebaseConfig } from "./firebaseConfig";

import { saveCookie, COOKIE_NAME_GOOGLE } from "@/lib/cookies";

const firabaseApp = initializeApp(firebaseConfig);

interface UserType {
  accessToken?: string;
  displayName: string;
  email: string;
  emailVerified: boolean;
  phoneNumber: string | number | null;
  photoURL: string;
  uid: string;
}

export async function tryLoginGoogle(auth: Auth) {
  const provider = new GoogleAuthProvider();
  provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

  try {
    const userCredential = await signInWithPopup(auth, provider);
    const userData = userCredential.user as UserType;

    if (userData.accessToken) saveCookie(userData.accessToken, COOKIE_NAME_GOOGLE);
  } catch (err) {
    throw new Error("Erro ao fazer login");
  }
}

export default async function loginWithGoogleAccount() {
  const auth = getAuth(firabaseApp);
  await tryLoginGoogle(auth);
}
