import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, signInWithPopup, getAuth, fetchSignInMethodsForEmail, Auth } from "firebase/auth";
import { firebaseConfig } from "./firebaseConfig";

import { tryLoginGoogle } from "@/services/firebase/googleAuth";
import { saveCookie, COOKIE_NAME_GOOGLE } from "@/lib/cookies";

const firebaseApp = initializeApp(firebaseConfig);

async function loginWithOtherCredentials(auth: Auth, email: string) {
  try {
    const response = await fetchSignInMethodsForEmail(auth, email);

    if (response[0] === "google.com") await tryLoginGoogle(auth);
    return null;
  } catch (googleError) {
    throw new Error("Erro ao fazer login");
  }
}

interface UserType {
  accessToken?: string;
  displayName: string;
  email: string;
  emailVerified: boolean;
  phoneNumber: string | number | null;
  photoURL: string;
  uid: string;
}

export default async function loginWithFacebookAccount() {
  const provider = new FacebookAuthProvider();
  const auth = getAuth(firebaseApp);

  try {
    const response = await signInWithPopup(auth, provider);
    const userData = response.user as UserType;

    if (userData.accessToken) saveCookie(userData.accessToken, COOKIE_NAME_GOOGLE);
    return null;
  } catch (facebookError: any) {
    if (facebookError.code !== "auth/account-exists-with-different-credential") throw new Error("Error ao fazer login!");
    const userEmail = facebookError.customData.email;

    await loginWithOtherCredentials(auth, userEmail);
    return null;
  }
}
