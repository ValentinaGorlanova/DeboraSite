import { NextApiRequest, NextApiResponse } from "next";
import { getAuth } from "firebase-admin/auth";
import { initializeApp, deleteApp } from "firebase-admin/app";

import { firebaseConfig } from "@/services/firebase/firebaseConfig";

const UNAUTHORIZATION_STATUS = 401;
const OK_STATUS = 200;

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  if (request.method !== "POST") return response.status(UNAUTHORIZATION_STATUS).json({ msg: "Acesso negado" });

  const { accessToken } = request.body;

  try {
    const firebaseApp = initializeApp(firebaseConfig);

    const result = await getAuth(firebaseApp).verifyIdToken(accessToken);
    deleteApp(firebaseApp);

    return response.status(OK_STATUS).json({ msg: "Token é valido" });
  } catch (err) {
    return response.status(UNAUTHORIZATION_STATUS).json({ msg: "Token inválido" });
  }
}
